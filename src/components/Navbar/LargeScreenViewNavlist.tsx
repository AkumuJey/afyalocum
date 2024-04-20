import { List, ListItem } from "@mui/material";
import { User } from "firebase/auth";
import { NavLink } from "react-router-dom";
import UserAvatar from "./UserAvatar";

interface PropTypes {
  scrollToTop: () => void;
  currentUser: User | null;
}

interface Link {
  path: string;
  label: string;
}
const linkData: Link[] = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/about", label: "About" },
  { path: "/register", label: "Signup" },
  { path: "/login", label: "Login" },
];

const LargeScreenViewNavlist = ({ scrollToTop, currentUser }: PropTypes) => {
  const isNavigationLinkVisible = (link: Link) => {
    return (
      (currentUser && link.path === "/login") ||
      (!currentUser && link.path === "/dashboard") ||
      (currentUser && link.path === "/register")
    );
  };

  return (
    <>
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
    </>
  );
};

export default LargeScreenViewNavlist;
