import { useState } from "react";
import ResetLinkForm from "../components/Registration/ResetLinkForm";
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
          <ResetLinkForm
            notifyVerificationSent={() => setVerificationSent(true)}
          />
        )}
      </RouterAnimation>
    </>
  );
};

export default RecoverPassword;
