import { List, ListItem } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import MobileViewNavlist from "./MobileViewNavlist";
import UserAvatar from "./UserAvatar";

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
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    scrollToTop();
    handleClose();
  };
  return (
    <>
      {!isMd ? (
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
          {linkData.map((link) => {
            if (isNavigationLinkVisible(link)) {
              return null;
            }
            return (
              <ListItem key={link.label} onClick={scrollToTop}>
                <NavLink
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
        <MobileViewNavlist handleClick={handleClick} handleClose={handleClose} open={open}/>
      )}
    </>
  );
};

export default NavLinkList;
