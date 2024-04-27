import { User } from "firebase/auth";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

interface Props {
  children: ReactNode;
}
const ProtectedRoutes = ({ children }: Props) => {
  const currentUser : User | null = useAuthStatus() 
  const location = useLocation()
  const targetPath = location.pathname
  if (!currentUser?.emailVerified) {
    return <Navigate to={`/login`} state={{
      targetPath
    }} replace={true}/>;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
