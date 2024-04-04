import { motion } from "framer-motion";
const loaderVariants = {
  animationOne: {
    x: [-20, 20, -20, 20],
    y: [0, -30, 0, -30],
    transition: {
      x: {
        duration: 0.5,
        repeat: Infinity,
      },
      y: {
        duration: 0.25,
        ease: "easeOut",
        repeat: Infinity,
      },
    },
  },
};

const LoadingPage = () => {
  return (
    <motion.div
      className={`flex justify-center items-center min-h-screen w-full mt-[-5rem] dark:bg-black bg-slate-700`}
    >
      <motion.div variants={loaderVariants} initial={{y: 0, x: -20}} animate="animationOne" className="w-3 h-3 rounded-[50%] bg-[#fff]"></motion.div>
    </motion.div>
  );
};

export default LoadingPage;
