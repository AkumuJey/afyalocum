import { Container, Paper } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import EmailInput from "./EmailInput";
import FormHeader from "./FormHeader";
import PasswordInput from "./PasswordInput";
import SubmitAndLoadButton from "./SubmitAndLoadButton";
import LoginError from "./LoginError";
import RecoverAndCreateAccount from "./RecoverAndCreateAccount";


const containerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  width: "95%",
  maxWidth: "400px",
  minHeight: "300px",
  padding: "0.5rem",
  mx: "auto",
  my: "auto",
}
const formStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 1,
}
const RegularLoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
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
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Paper
        component={`div`}
        aria-required
        sx={containerStyles}
      >
        <Container
          component={`form`}
          sx={formStyles}
          name="login"
          onSubmit={handleSubmit}
        >
          <FormHeader />
          <EmailInput loading={loading} />
          <PasswordInput loading={loading} />
          <SubmitAndLoadButton loading={loading} />
        </Container>
        {error && <LoginError />}
        <RecoverAndCreateAccount />
      </Paper>
    </>
  );
};

export default RegularLoginForm;
