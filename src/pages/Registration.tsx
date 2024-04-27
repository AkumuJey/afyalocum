import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import RegistrationFormLayout from "../components/Registration/RegistrationFormLayourt";
import VerificationSentComponent from "../components/Registration/VerificationSentComponent";
import useAuthStatus from "../hooks/useAuthStatus";
import RouterAnimation from "./RouterAnimation";

const Resigstration = () => {
  const [sent, setSent] = useState(false);
  const currentUser : User | null = useAuthStatus() ;

  useEffect(()=> {
    document.title = "AfyaLocum - Signup";
  }, [])
  if (currentUser?.emailVerified && !sent) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        {sent && <VerificationSentComponent content="Verification"/>}
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
