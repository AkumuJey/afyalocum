import { Typography } from "@mui/material";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <>
    <motion.div>
      <Typography variant="h3" component="h1" gutterBottom textAlign={`center`}>
        Connect with Healthcare Anytime, Anywhere
      </Typography>
      </motion.div>
    </>
  );
};

export default Header;
