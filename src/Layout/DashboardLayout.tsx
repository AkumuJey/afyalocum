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
        <div className="flex flex-col justify-start items-center valid-height w-full py-[1rem]">
            {!hideRegister && (
              <div className="w-full md:w-[75%] py-[1rem] px-[2rem] flex justify-between">
                <Button
                  color="info"
                  variant="outlined"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
                <Button
                  color="info"
                  variant="outlined"
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </Button>
              </div>
            )}
            <Outlet />
          <div/>
        </div>
      </RouterAnimation>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
