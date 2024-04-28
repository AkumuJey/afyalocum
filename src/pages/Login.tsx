import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { User } from "firebase/auth";
import { Navigate } from "react-router-dom";
import GoogleSignInButton from "../components/Login/GoogleSignInButton";
import LoginLayout from "../components/Login/LoginLayout";
import RegularLoginForm from "../components/Login/RegularLoginForm";
import useAuthStatus from "../hooks/useAuthStatus";
import RouterAnimation from "./RouterAnimation";
import VerificationSentComponent from "../components/Registration/VerificationSentComponent";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [unveriFied, setUnveriFied] = useState<boolean>(false);
  const currentUser: User | null = useAuthStatus();
  useEffect(() => {
    document.title = "AfyaLocum - Login";
  }, []);
  if (currentUser?.emailVerified) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
        <LoginLayout>
          {unveriFied && (
            <VerificationSentComponent
              content="Verify your email to login. Verification"
              closeLinkNotification={() => setUnveriFied(false)}
            />
          )}
          {!unveriFied && (
            <>
              <RegularLoginForm
                loading={loading}
                handleLoading={(value) => setLoading(value)}
                handleUnverified={() => setUnveriFied(true)}
              />
              <Typography fontWeight={`bold`} textAlign={`center`} py={1}>
                Or
              </Typography>
              <GoogleSignInButton
                loading={loading}
                handleLoading={(value) => setLoading(value)}
              />
            </>
          )}
        </LoginLayout>
      </RouterAnimation>
    </>
  );
};

export default Login;
