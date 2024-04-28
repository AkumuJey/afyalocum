import { Button } from "@mui/material";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import RouterAnimation from "../pages/RouterAnimation";

const DashboardLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const hideRegister = pathname === "/dashboard";
  const navigate = useNavigate();
  return (
    <ProtectedRoute>
      <RouterAnimation>
        <div className="flex flex-col justify-start items-center h-full w-full py-[1rem]">
            {!hideRegister && (
              <div className="w-full md:w-[75%] py-[1rem] px-[2rem]">
                <Button
                  color="info"
                  variant="outlined"
                  onClick={() => navigate(-1)}
                >
                  Dashboard
                </Button>
                <Button
                  color="info"
                  variant="outlined"
                  onClick={() => navigate(-1)}
                >
                  Holder
                </Button>
              </div>
            )}
          <div/>
          <Outlet />
        </div>
      </RouterAnimation>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
