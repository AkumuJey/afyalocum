import { motion } from "framer-motion";
import { ReactNode } from "react";
interface PropTypes {
  children: ReactNode;
}
const RouterAnimation = ({ children }: PropTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 0, x: "-100%" }}
      transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
      className="valid-height flex flex-col justify-center"
    >
      {children}
    </motion.div>
  );
};

export default RouterAnimation;
