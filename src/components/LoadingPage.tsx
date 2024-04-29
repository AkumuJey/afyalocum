import { Typography } from "@mui/material";
import { motion } from "framer-motion";

interface PropTypes{
  marginTop?: string
}
const LoadingPage = ({marginTop}: PropTypes) => {
  const text = "AfyaLocum";
  const textArray = Array.from(text);
  const mt =  marginTop || "mt-[-5rem]";
  return (
    <>
      <motion.div
        className={`min-h-screen flex items-center justify-center bg-[#90E4C1] ${mt} z-10`}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { delayChildren: 0.5, staggerChildren: 0.3 },
          },
        }}
        exit={{ opacity: 0 }}
      >
        {textArray.map((letter, index) => (
          <motion.span
            key={letter}
            className={index < 4 ? `text-[#21573e]` : `text-[#6c757d]`}
            variants={{
              initial: { opacity: 0, y: 20, x: 20 },
              animate: { opacity: 1, y: 0, x: 0 },
            }}
            exit={{ opacity: 0, y: 20, x: 20 }}
          >
            <Typography variant="h2" fontWeight={`bold`}>
              {letter}
            </Typography>
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default LoadingPage;
