import { List, ListItem, Drawer, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface PropTypes {
  open: boolean;
  isMd: boolean;
  handleClose: () => void;
}
const NavLinkList = ({ open, isMd, handleClose }: PropTypes) => {
  const linkData = [
    { path: "/", label: "Home" },
    { path: "/locums", label: "Locums" },
    { path: "/about", label: "About" },
    { path: "/login", label: "Login" },
  ];

  const [userDetails, setUserDetails] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (user) => {
        setUserDetails(user)
      });
    };
    return () => unsubscribe();
  }, []);
  return (
    <>
      {isMd ? (
        //mobile version
        <Drawer
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            gap: 2,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              maxWidth: 240,
              width: "100%",
            },
          }}
        >
          <List
            sx={{
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
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
            {linkData.map((link, index) => (
              <ListItem key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-purple-800" : ""
                  }
                  onClick={handleClose}
                >
                  {link.label}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      ) : (
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
            if (userDetails && link.path === "/login") {
              return null;
            }
            return (
              <ListItem key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-800 transition-all duration-500 ease-in h-[3rem] flex items-center"
                      : "h-[3rem] flex items-center"
                  }
                >
                  {link.label}
                </NavLink>
              </ListItem>
            );
          })}
          {userDetails && <UserAvatar userDetails={userDetails} />}
        </List>
      )}
    </>
  );
};

export default NavLinkList;
