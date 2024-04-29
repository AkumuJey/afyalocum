import { useEffect, useState } from "react";
import VerificationLinkForm from "../components/Registration/VerificationLinkForm.tsx";
import NotifyVerificationSent from "../components/Registration/NotifyVerificationSent.tsx";
import RouterAnimation from "./RouterAnimation";
const RecoverPassword = () => {
  const [verificationSent, setVerificationSent] = useState(false);
  useEffect(() => {
    document.title = "AfyaLocum - Reset Password";
  }, [])
  return (
    <>
      <RouterAnimation>
        <div className="min-w-full min-h-full">
          {verificationSent && <NotifyVerificationSent content="Password recovery" />}
          {!verificationSent && (
            <VerificationLinkForm
              notifyVerificationSent={() => setVerificationSent(true)}
            />
          )}
        </div>
      </RouterAnimation>
    </>
  );
};

export default RecoverPassword;
