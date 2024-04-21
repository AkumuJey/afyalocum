import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import RegistrationFormLayout from "../components/Registration/RegistrationFormLayourt";
import VerificationSentComponent from "../components/Registration/VerificationSentComponent";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";

const Resigstration = () => {
  document.title = "AfyaLocum - Signup";

  const [sent, setSent] = useState(false);
  const { currentUser } = useContext(AuthContext);
  if (currentUser?.emailVerified && !sent) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        {sent && <VerificationSentComponent />}
        {!sent && (
          <RegistrationFormLayout
            notifyVerificationSent={() => setSent(true)}
          />
        )}
      </RouterAnimation>
    </>
  );
};

export default Resigstration;
