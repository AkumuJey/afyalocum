import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const ProtectedRoutes = ({ children }: Props) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to={`/login`} />;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
