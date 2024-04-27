import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import useHeroChildrenAnimation from "../../../hooks/useHeroChildrenAnimation";
const Header = () => {
  const childrenVariants = useHeroChildrenAnimation()
  return (
    <>
    <motion.div initial="hidden" whileInView="visible" variants={childrenVariants}>
      <Typography variant="h3" component="h1" gutterBottom textAlign={`center`}>
        Connect with Healthcare Anytime, Anywhere
      </Typography>
      </motion.div>
    </>
  );
};

export default Header;
