import { Facebook } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

const IconWrapper = () => {
  const iconVariants = {
    hidden: { opacity: 0, rotate: -180, y: 20 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  };
  return (
    <motion.div variants={iconVariants}>
      <IconButton>
        <Facebook sx={{ color: "blue", fontSize: "2rem" }} />
      </IconButton>
    </motion.div>
  );
};

export default IconWrapper;
