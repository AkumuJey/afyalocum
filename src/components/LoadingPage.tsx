import { motion } from "framer-motion";
const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.3,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut"
      },
    },
  },
};
const LoadingPage = () => {
  return (
    <motion.div
      className={`flex justify-center items-center min-h-screen w-full mt-[-5rem] dark:bg-black bg-slate-700`}
    >
      <motion.div variants={loaderVariants} animate="animationOne" className="w-3 h-3 rounded-[50%] bg-[#fff]"></motion.div>
    </motion.div>
  );
};

export default LoadingPage;
