import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface propTypes {
  children: ReactNode;
}
const SocialMediaIcons = ({ children }: propTypes) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };
  console.log(isInView)
  return (
    <motion.div
      ref={ref}
      className={`w-fit my-2 p-2 flex justify-center items-center gap-5 `}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      {isInView && children}
    </motion.div>
  );
};

export default SocialMediaIcons;
