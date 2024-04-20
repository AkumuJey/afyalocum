import { Button, Drawer, List, Typography } from "@mui/material";
import { User } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import UserAvatar from "./UserAvatar";

interface PropTypes {
    open: boolean;
    currentUser: User  | null;
    handleClose: () => void;
    handleClick: () => void;
  }
  interface Link {
    path: string;
    label: string;
  }
  
const MobileViewNavlist = ({handleClose, handleClick, open, currentUser}: PropTypes) => {
    const linkData: Link[] = [
        { path: "/", label: "Home" },
        { path: "/dashboard", label: "Dashboard" },
        { path: "/about", label: "About" },
        { path: "/register", label: "Signup" },
        { path: "/login", label: "Login" },
      ];
      const isNavigationLinkVisible = (link: Link) => {
        return (
          (currentUser && link.path === "/login") ||
          (!currentUser && link.path === "/dashboard") ||
          (currentUser && link.path === "/register")
        );
      };
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
          <List
            sx={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              padding: "0.5rem",
            }}
            onClick={handleClick}
          >
            <Typography
              component={`div`}
              sx={{
                textAlign: "center",
              
                flexGrow: 1,
                display: "block",
                borderBottom: "solid 0.05rem",
              }}
              variant="h6"
            >
              <Typography
                component={`span`}
                className="text-[`#21573e`]"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                afya
              </Typography>
              <Typography
                component={`span`}
                className="text-[#6c757d]"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                locum
              </Typography>
            </Typography>
            {currentUser && <div className="mx-auto"><UserAvatar currentUser={currentUser} /></div>}
            {linkData.map((link) => {
              if (isNavigationLinkVisible(link)) {
                return null;
              }
              return (
                <Button
                  variant="outlined"
                  key={link.label}
                  onClick={handleClose}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-purple-800 w-full" : " w-full"
                    }
                    onClick={handleClose}
                  >
                    {link.label}
                  </NavLink>
                </Button>
              );
            })}
            {currentUser && (
              <>
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: "bold" }}
                  onClick={handleSignout}
                >
                  Logout
                </Button>
               
              </>
            )}
          </List>
        </Drawer>
    </>
  )
}

export default MobileViewNavlist
