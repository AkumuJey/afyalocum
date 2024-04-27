import { User } from "firebase/auth";
import { motion } from "framer-motion";
import useAuthStatus from "../../../hooks/useAuthStatus";
import useHeroChildrenAnimation from "../../../hooks/useHeroChildrenAnimation";
import LoggedinDisplayButtons from "./LoggedinDisplayButtons";
import LoggedoutDisplayButtons from "./LoggedoutDisplayButtons";

const ButtonsContainer = () => {
  const currentUser : User | null = useAuthStatus()  
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
