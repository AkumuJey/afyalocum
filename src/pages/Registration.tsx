import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";
import RegistrationFormLayout from "../components/Registration/RegistrationFormLayourt";

const Resigstration = () => {
  document.title = "AfyaLocum - Signup";

  const [sent, setSent] = useState(false);
  const { currentUser } = useContext(AuthContext);
  if (currentUser && !sent) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        {sent && <div className="grow">Verification Link to Your email.</div>}
        <RegistrationFormLayout notifyVerificationSent={() => setSent(true)} />
      </RouterAnimation>
    </>
  );
};

export default Resigstration;
