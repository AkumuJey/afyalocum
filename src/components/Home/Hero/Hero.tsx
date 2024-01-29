import { motion } from "framer-motion";
import ButtonsContainer from "./ButtonsContainer";
import Content from "./Content";
import Header from "./Header";

const Hero = () => {
  
  return (
    <motion.div
      className="py-[2rem] md:py-[4rem] max-w-2xl mx-auto px-[1rem]"
      initial={{ y: "5rem", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <Content />
      <ButtonsContainer />
    </motion.div>
  );
};

export default Hero;
