import { useState } from "react";
import AwaitingVerification from "../components/RecoverPassword/AwaitingVerification";
import LinkSent from "../components/RecoverPassword/LinkSent";
import RecoverPasswordLayout from "../components/RecoverPassword/RecoverPasswordLayout";
import RouterAnimation from "./RouterAnimation";
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
          {verificationSent && <LinkSent />}
        </RecoverPasswordLayout>
      </RouterAnimation>
    </>
  );
};

export default RecoverPassword;
