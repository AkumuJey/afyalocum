import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";
import RegistrationFormLayout from "../components/Registration/RegistrationFormLayourt";

const Resigstration = () => {
  document.title = "AfyaLocum - Register";
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        <RegistrationFormLayout/>
      </RouterAnimation>
    </>
  );
};

export default Resigstration;
