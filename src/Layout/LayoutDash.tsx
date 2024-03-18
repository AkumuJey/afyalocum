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

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

const LayoutDash = () => {
  const location = useLocation();
  const hideRegister = location.pathname === "/dashboard";
  const navigate = useNavigate();
  return (
    <ProtectedRoute>
      <RouterAnimation>
        <div className="flex flex-col justify-start items-center h-full w-full py-[1rem]">
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
                New Locum
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
            <div className="flex flex-wrap p-[1rem] md:p-[2rem] justify-start gap-[1rem]">
              <Button color="primary" variant="outlined" sx={{width: "20%"}}>
                <RouterLink to={`/dashboard/create-new-locum`}>
                  Create new locum
                </RouterLink>
              </Button>
              <Button color="primary" variant="outlined" sx={{width: "20%"}}>
                <RouterLink to={`/dashboard/open-locums`}>
                  Open Locums
                </RouterLink>
              </Button>
              <Button color="primary" variant="outlined" sx={{width: "20%"}}>
                <RouterLink to={`/dashboard/booked-locums`}>
                  Booked Locums
                </RouterLink>
              </Button>
              <Button color="primary" variant="outlined" sx={{width: "20%"}}>
                <RouterLink to={`/dashboard/settled-locums`}>
                  Booked Locums
                </RouterLink>
              </Button>
            </div>
          </div>
          <Outlet />
        </div>
      </RouterAnimation>
    </ProtectedRoute>
  );
};

export default LayoutDash;
