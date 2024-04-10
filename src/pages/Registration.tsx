import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { organizationInfo } from "../components/Registration/useRegistrationHooks";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";

//component imports
import RegistrationFormLayout from "../components/Registration/RegistrationFormLayourt";

const Resigstration = () => {
  const organizationInfo : organizationInfo = {
    name: "",
    password: "",
    email: "",
    hospitalDescription: "",
    image: null,
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        <RegistrationFormLayout existingProfile={organizationInfo}/>
      </RouterAnimation>
    </>
  );
};

export default Resigstration;
