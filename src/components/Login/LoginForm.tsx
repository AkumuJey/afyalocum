import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import SubmitAndLoadButton from "./SubmitAndLoadButton";
import FormHeader from "./FormHeader";
import EmailInput from "./EmailInput";
interface PropTypes{
    handleError: () => void
}
const LoginForm = ({handleError}: PropTypes) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
      handleError()
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
        <FormHeader/>
        <Grid
          container
          justifyContent={`center`}
          justifyItems={`center`}
          direction={`column`}
          my={2}
        >
          <Grid item>
            <EmailInput loading={loading}/>
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
        <SubmitAndLoadButton loading={loading} />
      </Container>
    </>
  );
};

export default LoginForm;
