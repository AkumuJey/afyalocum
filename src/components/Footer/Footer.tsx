import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Footer = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="bg-teal-600">
    <div className="flex flex-col md:flex-row justify-between px-[1.5rem]">
      <div className="text-center">
        <Typography variant="h3">Afya Locum</Typography>
      </div>
      <div className="flex gap-3 justify-evenly">
        <NavLink to={`/login`}>Login</NavLink>
        <NavLink to={`/dashboard`}>Dashboard</NavLink>
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/logout`}>Log out</NavLink>
        <NavLink to={`/profile`}>Dashboard</NavLink>
      </div>
      <div className="flex justify-evenly" id="social">
          <IconButton>
            <Facebook sx={{ color: "blue", fontSize: "2rem" }} />
          </IconButton>
          <IconButton>
            <Twitter sx={{ color: "black", fontSize: "2rem" }} />
          </IconButton>
          <IconButton>
            <Instagram sx={{ color: "red", fontSize: "2rem" }} />
          </IconButton>
          <IconButton>
            <LinkedIn sx={{ color: "blue", fontSize: "2rem" }} />
          </IconButton>
      </div>
    </div>
    <div className="w-full text-center">Website Developed by Dr Akumu J</div>
    </div>
  );
};

export default Footer;
