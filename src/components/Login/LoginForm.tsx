import { Container } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import EmailInput from "./EmailInput";
import FormHeader from "./FormHeader";
import PasswordInput from "./PasswordInput";
import SubmitAndLoadButton from "./SubmitAndLoadButton";
interface PropTypes {
  handleError: () => void;
}
const LoginForm = ({ handleError }: PropTypes) => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (state) {
        navigate(state);
      } else {
        navigate("/");
      }
    } catch (_error) {
      handleError();
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Container
        component={`form`}
        aria-required
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}
        name="login"
        onSubmit={handleSubmit}
      >
        <FormHeader />
        <EmailInput loading={loading} />
        <PasswordInput loading={loading} />
        <SubmitAndLoadButton loading={loading} />
      </Container>
    </>
  );
};

export default LoginForm;
