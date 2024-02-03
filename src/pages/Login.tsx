import { useContext, useState } from "react";


import { Navigate } from "react-router-dom";
import LoginError from "../components/Login/LoginError";
import LoginForm from "../components/Login/LoginForm";
import LoginLayout from "../components/Login/LoginLayout";
import RecoverAndCreateAccount from "../components/Login/RecoverAndCreateAccount";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";

const Login = () => {
  const [error, setError] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        <LoginLayout>
          <LoginForm handleError={() => setError(true)} />
          {error && <LoginError />}
          <RecoverAndCreateAccount />
        </LoginLayout>
      </RouterAnimation>
    </>
  );
};

export default Login;
