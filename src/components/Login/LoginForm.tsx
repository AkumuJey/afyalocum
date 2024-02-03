import { Container, Grid } from "@mui/material";
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
        sx={{ width: "100%" }}
        name="login"
        onSubmit={handleSubmit}
      >
        <FormHeader />
        <Grid
          container
          justifyContent={`center`}
          justifyItems={`center`}
          direction={`column`}
          my={2}
        >
          <Grid item>
            <EmailInput loading={loading} />
          </Grid>
          <Grid item>
            <PasswordInput loading={loading} />
          </Grid>
        </Grid>
        <SubmitAndLoadButton loading={loading} />
      </Container>
    </>
  );
};

export default LoginForm;
