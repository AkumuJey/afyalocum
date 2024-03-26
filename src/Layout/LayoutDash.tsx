import { Breadcrumbs, Button, Link, LinkProps } from "@mui/material";

import {
  Outlet,
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import RouterAnimation from "../pages/RouterAnimation";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}
interface RouteDisplay {
  [key: string]: string
}


const RouteDisplay: RouteDisplay = {
  "/dashboard/open-locums": "Open Locums",
  "/dashboard/booked-locums": "Booked Locums",
  "/dashboard/settled-locums": "Settled Locums",
  "/dashboard/create-new-locum": "Create New Locum",
};
function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

const LayoutDash = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const hideRegister = pathname === "/dashboard";
  const navigate = useNavigate();
  return (
    <ProtectedRoute>
      <RouterAnimation>
        <div className="flex flex-col justify-start items-center h-full w-full py-[1rem]">
          {!hideRegister && (
            <>
              <div className="w-[80%] mx-auto">
                <Breadcrumbs separator=">">
                  <LinkRouter
                    to={`/dashboard`}
                    underline="hover"
                    color={hideRegister ? "purple" : "black"}
                    sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                  >
                    Locums
                  </LinkRouter>
                  <LinkRouter
                    to={`/dashboard/create-new-locum`}
                    underline="hover"
                    color={!hideRegister ? "purple" : "black"}
                    sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                  >
                    {RouteDisplay[pathname as keyof RouteDisplay]}
                  </LinkRouter>
                </Breadcrumbs>
              </div>
              <div className="w-[80%] mx-auto py-[0.4rem]">
                <Button
                  color="info"
                  variant="outlined"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
              </div>
            </>
          )}
          <Outlet />
        </div>
      </RouterAnimation>
    </ProtectedRoute>
  );
};

export default LayoutDash;
