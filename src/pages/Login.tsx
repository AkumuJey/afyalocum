import {
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography
} from "@mui/material";
import { FormEvent, useContext, useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import LoginLayout from "../components/Login/LoginLayout";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase/firebase";
import RouterAnimation from "./RouterAnimation";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
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
      setError("Incorrect password or email! Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (currentUser) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        <LoginLayout>
          <Container
            component={`form`}
            aria-required
            sx={{ width: "100%" }}
            name="login"
            onSubmit={handleSubmit}
          >
            <Typography
              variant="h4"
              fontWeight={`bold`}
              textAlign={`center`}
              color="secondary"
            >
              Login
            </Typography>
            <Grid
              container
              justifyContent={`center`}
              justifyItems={`center`}
              direction={`column`}
              my={2}
            >
              <Grid item>
                <InputLabel
                  htmlFor="email"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    width: "100%",
                  }}
                >
                  Email
                </InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  disabled={loading}
                  sx={{
                    width: "100%",
                    backgroundColor: "white",
                    px: "0.5rem",
                    py: "0.2rem",
                  }}
                />
              </Grid>
              <Grid item>
                <InputLabel
                  htmlFor="password"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    width: "100%",
                  }}
                >
                  Password
                </InputLabel>
                <Input
                  id="password"
                  name="password"
                  autoComplete="off"
                  required
                  disabled={loading}
                  type={showPassword ? "text" : "password"}
                  sx={{
                    width: "100%",
                    backgroundColor: "white",
                    px: "0.5rem",
                    py: "0.2rem",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ width: "100%" }}
              color="secondary"
              loading={loading}
            >
              Login
            </LoadingButton>
          </Container>
          <Container className="min-w-full text-center text-red-600 font-semibold">
            {error}
          </Container>
          <Container
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{ textTransform: "none" }}
              type="button"
              onClick={() => navigate("/register")}
            >
              Create Account
            </Button>
            <Button
              style={{ textTransform: "none" }}
              type="button"
              onClick={() => navigate("/recover-password")}
            >
              Forgot Password
            </Button>
          </Container>
        </LoginLayout>
      </RouterAnimation>
    </>
  );
};

export default Login;
