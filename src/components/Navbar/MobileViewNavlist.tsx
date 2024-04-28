import { Box, Button, Drawer, Typography } from "@mui/material";
import { User } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import useAuthStatus from "../../hooks/useAuthStatus";
import HospitalAvatar from "./HospitalAvatar";

interface PropTypes {
  open: boolean;
  handleClose: () => void;
  handleClick: () => void;
}

const MobileViewNavlist = ({ handleClose, handleClick, open }: PropTypes) => {
  const currentUser: User | null = useAuthStatus();
  const handleSignout = () => {
    handleClose();
    auth.signOut();
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          gap: 2,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            maxWidth: 200,
            width: "100%",
          },
        }}
      >
        <div className="w-full h-full flex flex-col justify-between px-[0.5rem] py-[1rem]">
          <div>
            <Box
              component={`div`}
              sx={{
                textAlign: "center",

                flexGrow: 1,
                display: "block",
                borderBottom: "solid 0.05rem",
              }}
            >
              <Typography
                component={`span`}
                className="text-[`#21573e`]"
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                afya
              </Typography>
              <Typography
                component={`span`}
                className="text-[#6c757d]"
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                locum
              </Typography>
            </Box>
            <div className="flex flex-col gap-[1rem] justify-center px-[1rem] py-[1rem]">
              <NavLink
                to={`/`}
                onClick={handleClick}
                className={({ isActive, isPending }) =>
                  isActive ? "text-purple-800" : isPending ? "pending" : ""
                }
              >
                <Typography variant="h6" fontWeight="bold">Home</Typography>
              </NavLink>
              {currentUser?.emailVerified && (
                <>
                  <NavLink
                    to={`/dashboard`}
                    onClick={handleClick}
                    className={({ isActive, isPending }) =>
                      isActive ? "text-purple-800" : isPending ? "pending" : ""
                    }
                  >
                    <Typography variant="h6" fontWeight="bold">Dashboard</Typography>
                  </NavLink>
                  <NavLink
                    to={`/profile`}
                    onClick={handleClick}
                    className={({ isActive, isPending }) =>
                      isActive ? "text-purple-800" : isPending ? "pending" : ""
                    }
                  >
                    <Typography variant="h6" fontWeight="bold">Profile</Typography>
                  </NavLink>
                </>
              )}
              <NavLink
                to={`/about`}
                onClick={handleClick}
                className={({ isActive, isPending }) =>
                  isActive ? "text-purple-800" : isPending ? "pending" : ""
                }
              >
                <Typography variant="h6" fontWeight="bold">About</Typography>
              </NavLink>
              {!currentUser?.emailVerified && (
                <>
                  <NavLink
                    to={`/login`}
                    onClick={handleClick}
                    className={({ isActive, isPending }) =>
                      isActive ? "text-purple-800" : isPending ? "pending" : ""
                    }
                  >
                    <Typography variant="h6" fontWeight="bold">Login</Typography>
                  </NavLink>
                  <NavLink
                    to={`/register`}
                    onClick={handleClick}
                    className={({ isActive, isPending }) =>
                      isActive ? "text-purple-800" : isPending ? "pending" : ""
                    }
                  >
                    <Typography variant="h6" fontWeight="bold">Signup</Typography>
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {currentUser?.emailVerified && (
            <div className="flex justify-center flex-wrap gap-[0.5rem]">
              <>
                <NavLink
                  to={`/profile`}
                  className="flex justify-center w-full"
                  onClick={handleClick}
                >
                  {currentUser && <HospitalAvatar />}
                </NavLink>

                <div className="w-full">
                  <Typography variant="h6" textAlign={`center`}>
                    {currentUser!.displayName}
                  </Typography>
                </div>
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: "bold", mx: "auto" }}
                  onClick={handleSignout}
                >
                  Logout
                </Button>
              </>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default MobileViewNavlist;
