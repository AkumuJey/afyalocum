import { motion } from "framer-motion";
import { ReactNode } from "react";
interface PropTypes {
 xAnimationDirection: number;
  children: ReactNode;
}

const ButtonAnimation = ({ xAnimationDirection, children }: PropTypes) => {
  return (
    <motion.div
      initial={{ x: xAnimationDirection }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="w-fit bg-green"
    >
        {children}
    </motion.div>
  );
};

export default ButtonAnimation;
