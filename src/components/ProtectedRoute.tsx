import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const ProtectedRoutes = ({ children }: Props) => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation()
  const currentPath = location.pathname
  if (!currentUser) {
    return <Navigate to={`/login`} state={currentPath} replace={true}/>;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
