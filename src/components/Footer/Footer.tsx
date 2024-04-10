import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase/firebase";

const Footer = () => {
  const { currentUser } = useContext(AuthContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();
  const handleClick = (direction: string) => {
    scrollToTop();
    navigate(direction);
  };
  const handleLogout = () => {
    scrollToTop();
    auth.signOut();
  };
  return (
    <div className="bg-teal-200 min-w-full py-[1rem]">
      <div className="flex flex-col md:flex-row justify-between px-[1.5rem] mb-[1rem]">
        <div className="flex justify-between md:justify-evenly items-center w-full md:w-[50%] md:text-[1.5rem] mb-[1rem] md:mb-0">
          <Button
            variant="outlined"
            onClick={() => handleClick("/")}
            color="inherit"
          >
            Home
          </Button>
          {currentUser ? (
            <>
              <Button
                variant="outlined"
                onClick={() => handleClick("/dashboard")}
                color="inherit"
              >
                Dashboard
              </Button>
              <Button variant="outlined" onClick={handleLogout} color="inherit">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={() => handleClick("/register")}
                color="inherit"
              >
                Sign Up
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleClick("/login")}
                color="inherit"
              >
                Login
              </Button>
            </>
          )}
        </div>
        <div
          className="flex justify-between md:justify-evenly items-center w-full md:w-[50%]"
          id="social"
        >
          <a href="http://localhost:5173/dashboard" target="_blank">
            <Facebook sx={{ color: "blue", fontSize: "2rem" }} />
          </a>
          <a href="http://" target="_blank">
            <Twitter sx={{ color: "black", fontSize: "2rem" }} />
          </a>
          <a href="http://" target="_blank">
            <Instagram sx={{ color: "red", fontSize: "2rem" }} />
          </a>
          <a href="http://" target="_blank">
            <LinkedIn sx={{ color: "blue", fontSize: "2rem" }} />
          </a>
        </div>
      </div>
      <div className="w-full text-center">
        <Typography variant="h6">
          &#169; 2024 Copyright: <span className="font-bold">AfyaLocum</span>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
