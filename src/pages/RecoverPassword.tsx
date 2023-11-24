import {
  Paper,
  Container,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const RecoverPassword = () => {
  const [verificationSent, setVerificationSent] = useState(false);
  const sendLink = () => {
    setVerificationSent(true);
  };
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
          backgroundColor: verificationSent ? "teal" : "white",
        }}
      >
        {!verificationSent && (
          <Container component={`form`} onSubmit={sendLink}>
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
              autoComplete="off"
              required
              sx={{
                width: "100%",
                backgroundColor: "white",
                px: "0.5rem",
                py: "0.2rem",
                mb: "1rem",
              }}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ width: "100%" }}
              style={{ textTransform: "none" }}
            >
              Recover Password
            </Button>
          </Container>
        )}
        {verificationSent && (
          <Container
            component={`div`}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Typography variant={`h5`} textAlign={`center`}>
              Password recovery link sent to email
            </Typography>
            <CheckCircleOutlineIcon
              sx={{
                mx: "auto",
                borderRadius: "100%",
                fontSize: "3rem"
              }}
            />
          </Container>
        )}
      </Paper>
    </>
  );
};

export default RecoverPassword;
