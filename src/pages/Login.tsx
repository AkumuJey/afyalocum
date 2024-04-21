import { useContext, useState } from "react";

import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import GoogleSignInButton from "../components/Login/GoogleSignInButton";
import RegularLoginForm from "../components/Login/RegularLoginForm";
import LoginLayout from "../components/Login/LoginLayout";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";

const Login = () => {
  document.title = "AfyaLocum - Login";
  const [loading, setLoading] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        <LoginLayout>
          <RegularLoginForm
            loading={loading}
            handleLoading={(value) => setLoading(value)}
          />
          <Typography fontWeight={`bold`} textAlign={`center`} py={1}>
            Or
          </Typography>
          <GoogleSignInButton
            loading={loading}
            handleLoading={(value) => setLoading(value)}
          />
        </LoginLayout>
      </RouterAnimation>
    </>
  );
};

export default Login;
