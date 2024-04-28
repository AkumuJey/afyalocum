import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

type HandleLoading = (decide: boolean) => void;
type HandleUnverified = () => void;

const useRegularLogin = (
  handleLoading: HandleLoading,
  handleUnverified: HandleUnverified
) => {
  const [error, setError] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleNextRoute = () => {
    if (!state?.targetPath) {
      navigate("/", { replace: true });
      return;
    }
    const { targetPath } = state;
    navigate(targetPath);
  };

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLoading(true);
    setSpinner(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      if (user!.emailVerified) {
        handleNextRoute();
        return;
      }
      await auth.signOut();
      handleUnverified();
    } catch (_error) {
      setError(true);
    } finally {
      handleLoading(false);
      setSpinner(false);
    }
  };
  const handleClose = () => {
    () => setError(false);
  };
  return {
    error,
    spinner,
    handleSignin,
    handleClose,
  };
};

export default useRegularLogin;
