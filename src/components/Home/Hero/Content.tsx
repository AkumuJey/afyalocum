import { Typography } from "@mui/material";
import { motion } from "framer-motion";
const Content = () => {
  return (
    <>
    <motion.div>
      <Typography variant="h6" paragraph textAlign={`center`}>
        Access quality healthcare from the comfort of your home. Our
        telemedicine app provides secure and convenient video consultations with
        licensed professionals.
      </Typography>
      </motion.div>
    </>
  );
};

export default Content;
