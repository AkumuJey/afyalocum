import { useState } from "react";
import RecoverPasswordForm from "../components/Registration/RecoverPasswordForm";
import VerificationSentComponent from "../components/Registration/VerificationSentComponent";
import RouterAnimation from "./RouterAnimation";
const RecoverPassword = () => {
  document.title = "AfyaLocum - Reset Password";
  const [verificationSent, setVerificationSent] = useState(false);
  return (
    <>
      <RouterAnimation>
        {verificationSent && (
          <VerificationSentComponent content="Password recovery" />
        )}
        {!verificationSent && (
          <RecoverPasswordForm
            notifyVerificationSent={() => setVerificationSent(true)}
          />
        )}
      </RouterAnimation>
    </>
  );
};

export default RecoverPassword;
