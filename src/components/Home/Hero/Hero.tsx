import { motion } from "framer-motion";
import ButtonsContainer from "./ButtonsContainer";
import Content from "./Content";
import Header from "./Header";
import useParentAnimation from "./useParentAnimation";

const Hero = () => {
  const containerVariants = useParentAnimation()
  return (
    <motion.div
      className="py-[2rem] md:py-[4rem] max-w-2xl mx-auto px-[1rem]"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <Header />
      <Content />
      <ButtonsContainer />
    </motion.div>
  );
};

export default Hero;
