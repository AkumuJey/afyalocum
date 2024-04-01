import { Button, Drawer, List, ListItem, Typography } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UserAvatar from "./UserAvatar";
import { auth } from "../../firebase/firebase";

interface PropTypes {
  open: boolean;
  isMd: boolean;
  handleClose: () => void;
}

const NavLinkList = ({ open, isMd, handleClose }: PropTypes) => {
  const { currentUser } = useContext(AuthContext);
  interface Link {
    path: string;
    label: string;
  }
  const linkData: Link[] = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/about", label: "About" },
    { path: "/register", label: "Sign Up" },
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    console.log("Hello handleClick");
    scrollToTop();
    handleClose();
  };
  return (
    <>
      {!isMd ? (
        // Desktop version
        <List
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: "4rem",
          }}
        >
          {linkData.map((link, index) => {
            if (isNavigationLinkVisible(link)) {
              return null;
            }
            return (
              <ListItem key={index} onClick={handleClick}>
                <NavLink
                  onClick={handleClick}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-800 transition-all duration-500 ease-in h-[3rem] flex items-center whitespace-nowrap"
                      : "h-[3rem] flex items-center whitespace-nowrap"
                  }
                >
                  {link.label}
                </NavLink>
              </ListItem>
            );
          })}
          {currentUser && <UserAvatar currentUser={currentUser} />}
        </List>
      ) : (
        //mobile version
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
          <NavLink to={`/dashboard`} onClick={handleClick}>
            Dashboard
          </NavLink>
          {/* <List
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
                padding: "0 2rem 0 2rem",
                flexGrow: 1,
                display: "block",
                borderBottom: "solid 0.05rem",
              }}
              variant="h6"
            >
              <Typography
                component={`span`}
                className="text-[`#21573e`]"
                sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
              >
                afya
              </Typography>
              <Typography
                component={`span`}
                className="text-[#6c757d]"
                sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
              >
                locum
              </Typography>
            </Typography>
            {linkData.map((link, index) => {
              if (isNavigationLinkVisible(link)) {
                return null;
              }
              return (
                <Button variant="outlined" onClick={handleClick} key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-purple-800 w-full" : " w-full"
                    }
                  >
                    {link.label}
                  </NavLink>
                </Button>
              );
            })}
            {currentUser && (
              <Button
                color="primary"
                variant="outlined"
                sx={{ fontWeight: "bold" }}
                onClick={handleSignout}
              >
                Logout
              </Button>
            )}
          </List> */}
          <Button variant="outlined" onClick={handleClick}>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-purple-800 w-full" : " w-full"
              }
            >
              Home
            </NavLink>
          </Button>
        </Drawer>
      )}
    </>
  );
};

export default NavLinkList;
