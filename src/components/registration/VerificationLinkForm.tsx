import { LoadingButton } from "@mui/lab";
import { Alert, Input, InputLabel, Paper, Typography } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";

interface PropTypes {
  notifyVerificationSent: () => void;
}
const VerificationLinkForm = ({ notifyVerificationSent }: PropTypes) => {
  const [error, setError] = useState(false);
  const location = useLocation();
  const buttonContent = `${
    location?.state?.title
      ? "Resend verification Email"
      : "Send Password Reset Email"
  }`;
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const email = new FormData(e.currentTarget as HTMLFormElement).get(
        "email"
      );
      await sendPasswordResetEmail(auth, email as string);
      notifyVerificationSent();
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: "95%",
          maxWidth: "500px",
          mx: "auto",
          bgcolor: "ButtonFace",
        }}
        component={`form`}
        onSubmit={handleSubmit}
      >
        {location.state && (
          <>
            <Typography>
              Your email is unverified. Check inbox for verification link.
            </Typography>
            <Typography variant="h6" textAlign={`center`}>
              or
            </Typography>
          </>
        )}
        <InputLabel
          htmlFor="email"
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
        >
          Enter email:
        </InputLabel>
        <Input
          id="email"
          name="email"
          autoComplete="off"
          defaultValue={location?.state?.email || ""}
          required
          sx={{
            width: "100%",
            px: "0.5rem",
            py: "0.2rem",
            mb: "1rem",
          }}
        />
        <LoadingButton
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "100%" }}
          style={{ textTransform: "none" }}
        >
          {buttonContent}
        </LoadingButton>
        {error && (
          <Alert
            severity="error"
            onClose={() => setError(false)}
            sx={{ mx: "auto" }}
          >
            An Error Occured While Sending Email.
          </Alert>
        )}
      </Paper>
    </>
  );
};

export default VerificationLinkForm;
