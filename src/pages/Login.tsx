import { useState, FormEvent, useContext } from "react";
import {
  Container,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { LoadingButton } from "@mui/lab";
import { AuthContext } from "../contexts/AuthContext";


const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const  { currentUser } = useContext(AuthContext)
const location = useLocation()
const {state} = location
console.log(state)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (state) {
        navigate(state)
      } else {navigate("/")}
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after the process completes
    }
  };

  

  if (currentUser) {
    return <Navigate to={`/`} replace={true}/>
  }
  return (
    <>
      <Paper
        elevation={3}
        component={`div`}
        sx={{
          width: "95%",
          maxWidth: "400px",
          mx: "auto",
          my: "auto",
          padding: "1rem",
          backgroundColor: "white",
        }}
      >
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
      </Paper>
    </>
  );
};

export default Login;
