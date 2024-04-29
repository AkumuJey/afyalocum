import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { User } from "firebase/auth";
import { Navigate } from "react-router-dom";
import GoogleSignInButton from "../components/Login/GoogleSignInButton";
import LoginLayout from "../components/Login/LoginLayout";
import RegularLoginForm from "../components/Login/RegularLoginForm";
import useAuthStatus from "../hooks/useAuthStatus";
import RouterAnimation from "./RouterAnimation";
import NotifyVerificationSent from "../components/Registration/NotifyVerificationSent";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [unverified, setUnverified] = useState<boolean>(false);
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
          {unverified && (
            <NotifyVerificationSent
              content="Verify your email to login. Verification"
              closeLinkNotification={() => setUnverified(false)}
            />
          )}
          {!unverified && (
            <>
              <RegularLoginForm
                loading={loading}
                handleLoading={(value) => setLoading(value)}
                handleUnverified={() => setUnverified(true)}
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
