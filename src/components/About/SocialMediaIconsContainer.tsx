import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

const SocialMediaIconsContainer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, } },
  };
  const iconVariants = {
    hidden: { opacity: 0, rotate: -180, y: 20 },
    visible: { opacity: 1, rotate: 0, y: 0, },
  };

  return (
    <motion.div
      className={`w-fit my-2 p-2 flex justify-center items-center gap-5 `}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={iconVariants}>
        <IconButton>
          <Facebook sx={{ color: "blue", fontSize: "2rem" }} />
        </IconButton>
      </motion.div>
      <motion.div variants={iconVariants}>
        <IconButton>
          <Twitter sx={{ color: "black", fontSize: "2rem" }} />
        </IconButton>
      </motion.div>
      <motion.div variants={iconVariants}>
        <IconButton>
          <Instagram sx={{ color: "red", fontSize: "2rem" }} />
        </IconButton>
      </motion.div>
      <motion.div variants={iconVariants}>
        <IconButton>
          <LinkedIn sx={{ color: "blue", fontSize: "2rem" }} />
        </IconButton>
      </motion.div>
    </motion.div>
  );
};

export default SocialMediaIconsContainer;
