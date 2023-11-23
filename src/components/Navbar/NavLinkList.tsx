import { List } from "@mui/material";
import { NavLink } from "react-router-dom";

interface PropTypes {
  open: boolean;
}
const NavLinkList = ({ open }: PropTypes) => {
  const linkData = [
    { path: "/", label: "Home" },
    { path: "/locums", label: "Locums" },
    { path: "/about", label: "About" },
    { path: "/register", label: "Register" },
  ];
  return (
    <>
        <List sx={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          display: open ? 'none' : 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: '4rem',
        }}>
          {linkData.map((link, index) => (
          <li key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? "text-purple-800" : "")}
          >
            {link.label}
          </NavLink>
        </li>
        ))}
        </List>
    </>
  );
};

export default NavLinkList;
