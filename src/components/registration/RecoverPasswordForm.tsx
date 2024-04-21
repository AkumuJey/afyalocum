import { LoadingButton } from "@mui/lab";
import { Alert, Input, InputLabel, Paper } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../../firebase/firebase";

interface PropTypes {
  notifyVerificationSent: () => void;
}
const AwaitingVerification = ({ notifyVerificationSent }: PropTypes) => {
  const [error, setError] = useState(false);
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
        <InputLabel
          htmlFor="email"
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
        >
          Email:
        </InputLabel>
        <Input
          id="email"
          name="email"
          autoComplete="off"
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
          Recover Password
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

export default AwaitingVerification;
