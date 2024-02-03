import {
  Button,
  Container,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RecoverPasswordLayout from "../components/RecoverPassword/RecoverPasswordLayout";
import RouterAnimation from "./RouterAnimation";
import AwaitingVerification from "../components/RecoverPassword/AwaitingVerification";
const RecoverPassword = () => {
  const [verificationSent, setVerificationSent] = useState(false);
  const sendLink = () => {
    setVerificationSent(true);
  };
  return (
    <>
      <RouterAnimation>
        <RecoverPasswordLayout verificationSent={verificationSent}>
          {!verificationSent && <AwaitingVerification sendLink={sendLink} />}
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
                  fontSize: "3rem",
                }}
              />
            </Container>
          )}
        </RecoverPasswordLayout>
      </RouterAnimation>
    </>
  );
};

export default RecoverPassword;
