import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { User } from "firebase/auth";
import { Navigate } from "react-router-dom";
import GoogleSignInButton from "../components/Login/GoogleSignInButton";
import LoginLayout from "../components/Login/LoginLayout";
import RegularLoginForm from "../components/Login/RegularLoginForm";
import useAuthStatus from "../hooks/useAuthStatus";
import RouterAnimation from "./RouterAnimation";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const currentUser : User | null = useAuthStatus() 
  useEffect(()=> {
    document.title = "AfyaLocum - Login";
  }, [])
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
