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

interface PropTypes{
  handleLoading: (decide: boolean) => void
  loading: boolean
}
const RegularLoginForm = ({handleLoading, loading}: PropTypes) => {
  const [error, setError] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLoading(true)
    setSpinner(true)
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (state) {
        const { targetPath  } = state
        navigate(targetPath);
      } else {
        navigate("/");
      }
    } catch (_error) {
      setError(true);
    } finally {
      handleLoading(false)
      setSpinner(false)
    }
  };
  console.log(state)
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
          <SubmitAndLoadButton loading={loading} spinner={spinner}/>
        </Container>
        {error && <LoginError handleClose={() => setError(false)}/>}
        <RecoverAndCreateAccount />
      </Paper>
    </>
  );
};

export default RegularLoginForm;
