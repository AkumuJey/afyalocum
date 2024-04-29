import { useEffect, useState } from "react";

import RouterAnimation from "./RouterAnimation";
import ResetLinkForm from "@components/Registration/ResetLinkForm";
import VerificationSentComponent from "@components/Registration/VerificationSentComponent";
const RecoverPassword = () => {
  const [verificationSent, setVerificationSent] = useState(false);
  useEffect(() => {
    document.title = "AfyaLocum - Reset Password";
  }, [])
  return (
    <>
      <RouterAnimation>
        <div className="min-w-full min-h-full">
          {verificationSent && <VerificationSentComponent content="Password recovery" />}
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
