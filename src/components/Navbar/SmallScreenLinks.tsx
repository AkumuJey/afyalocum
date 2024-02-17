import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const SmallScreenLinks = () => {
    const linkData = [
        { path: "/", label: "Home" },
        { path: "/locums", label: "Locums" },
        { path: "/about", label: "About" },
        { path: "/register", label: "Register" },
      ];
  return (
    <List>
      {linkData.map((link, index) => (
        <ListItem key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? "text-purple-800" : "")}
          >
            {link.label}
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default SmallScreenLinks;
