import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import LoggedinDisplayButtons from "./LoggedinDisplayButtons";
import LoggedoutDisplayButtons from "./LoggedoutDisplayButtons";
import useHeroChildrenAnimation from "./useHeroChildrenAnimation";

const ButtonsContainer = () => {
  const { currentUser } = useContext(AuthContext);
  const childrenVariants = useHeroChildrenAnimation()
  return (
    <motion.div
      className="w-full flex flex-col sm:flex-row items-center gap-2 justify-around max-w-xl mx-auto"
      initial="hidden"
      whileInView="visible"
      variants={childrenVariants}
    >
      {currentUser ? <LoggedinDisplayButtons /> : <LoggedoutDisplayButtons />}
    </motion.div>
  );
};

export default ButtonsContainer;
