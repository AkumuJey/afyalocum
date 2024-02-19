import { useContext, useState } from "react";

import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import GoogleSignInButton from "../components/Login/GoogleSignInButton";
import RegularLoginForm from "../components/Login/RegularLoginForm";
import LoginLayout from "../components/Login/LoginLayout";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";

const Login = () => {
  const [commonDisable, setCommonDisable] = useState(false);
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        <LoginLayout>
          <RegularLoginForm
            commonDisable={commonDisable}
            preventDoubleSubmission={(value) => setCommonDisable(value)}
          />
          <Typography fontWeight={`bold`} textAlign={`center`} py={1}>
            Or
          </Typography>
          <GoogleSignInButton
            commonDisable={commonDisable}
            preventDoubleSubmission={(value) => setCommonDisable(value)}
          />
        </LoginLayout>
      </RouterAnimation>
    </>
  );
};

export default Login;
