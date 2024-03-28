import { Google } from "@mui/icons-material";
import { Alert, Button, Paper } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { useLocation, useNavigate } from "react-router-dom";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  width: "95%",
  maxWidth: "400px",
  minHeight: "30px",
  mx: "auto",
  my: "auto",
};

const errorStyles = {
  width: "95%",
  maxWidth: "400px",
  minHeight: "30px",
  mx: "auto",
  my: "auto",
};
interface PropTypes {
  handleLoading: (decide: boolean) => void;
  loading: boolean;
}

const GoogleSignInButton = ({ loading, handleLoading }: PropTypes) => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleSignIn = () => {
    handleLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      .catch((problem) => {
        console.log(problem);
        setError(true);
      })
      .finally(() => {
        handleLoading(false);
      });
  };
  return (
    <>
      <Paper elevation={3} sx={containerStyles}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%" }}
          startIcon={<Google />}
          type="button"
          onClick={handleSignIn}
          disabled={loading}
        >
          Sign in with Google
        </Button>
      </Paper>
      {error && (
        <Alert
          severity="error"
          sx={errorStyles}
          onClose={() => setError(false)}
        >
          Failed to login. Try Again.
        </Alert>
      )}
    </>
  );
};

export default GoogleSignInButton;
