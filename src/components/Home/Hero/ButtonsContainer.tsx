import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import LoggedinDisplayButtons from "./LoggedinDisplayButtons";
import LoggedoutDisplayButtons from "./LoggedoutDisplayButtons";

const ButtonsContainer = () => {
  const { currentUser } = useContext(AuthContext);
  return (
      <motion.div className="w-full flex justify-around max-w-xl mx-auto">
        {currentUser ? <LoggedinDisplayButtons /> : <LoggedoutDisplayButtons />}
      </motion.div>
  );
};

export default ButtonsContainer;
