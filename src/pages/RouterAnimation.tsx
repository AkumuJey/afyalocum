import { motion } from "framer-motion";
import { ReactNode } from "react";
interface PropTypes{
    children: ReactNode
}
const RouterAnimation = ({ children }: PropTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="valid-height flex justify-center items-center bg-green-500"
    >
        {children}
    </motion.div>
  );
};

export default RouterAnimation;
