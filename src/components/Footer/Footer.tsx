import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md: justify-between">
        <div>Afya Locum</div>
        <div className="flex gap-3">
          <NavLink to={`/login`}>Login</NavLink>
          <NavLink to={`/About`}>Login</NavLink>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md: justify-between">
        <div id="social">
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
        <div id="sponsors">Powered By</div>
      </div>
      <div>Website Developed by Dr Akumu J</div>
    </div>
  );
};

export default Footer;
