import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import useHeroChildrenAnimation from "../../../hooks/useHeroChildrenAnimation";
const Content = () => {
  const childrenVariants = useHeroChildrenAnimation()
  return (
    <>
      <motion.div
        className="w-full flex justify-around max-w-xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={childrenVariants}
      >
        <Typography variant="h6" paragraph textAlign={`center`}>
          Access quality healthcare from the comfort of your home. Our
          telemedicine app provides secure and convenient video consultations
          with licensed professionals.
        </Typography>
      </motion.div>
    </>
  );
};

export default Content;
