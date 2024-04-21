import { useState } from "react";
import ResetLinkForm from "../components/Registration/ResetLinkForm";
import VerificationSentComponent from "../components/Registration/VerificationSentComponent";
import RouterAnimation from "./RouterAnimation";
import { useLocation } from "react-router-dom";
const RecoverPassword = () => {
  const location = useLocation();
  document.title = location?.state?.title || "AfyaLocum - Reset Password";
  const content = `${
    location?.state?.title ? "Verification" : "Password recovery"
  }`;
  const [verificationSent, setVerificationSent] = useState(false);
  return (
    <>
      <RouterAnimation>
        <div className="min-w-full min-h-full">
          {verificationSent && <VerificationSentComponent content={content} />}
          {!verificationSent && (
            <ResetLinkForm
              notifyVerificationSent={() => setVerificationSent(true)}
            />
          )}
        </div>
      </RouterAnimation>
    </>
  );
};

export default RecoverPassword;
