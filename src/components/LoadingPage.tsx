import { Typography } from "@mui/material";
import { motion } from "framer-motion";

interface PropTypes {
  marginTop?: string;
  content?: string;
}
const LoadingPage = ({ marginTop, content }: PropTypes) => {
  const text = "Afya Locum";
  const stringArray = content || text;
  const textArray = Array.from(stringArray);
  const mt = marginTop || "mt-[-5rem]";
  return (
    <>
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-[#90E4C1] ${mt} z-10`}
      >
        {content && (
          <div className="flex">
            {Array.from(text).map((letter, index) => (
              <motion.span
                key={index + letter}
                className={`${index < 4 ? "text-[#21573e]" : "text-[#6c757d]"}`}
              >
                <Typography variant="h2" fontWeight={`bold`}>
                  {letter}
                </Typography>
              </motion.span>
            ))}
          </div>
        )}
        <motion.div
          initial="initial"
          animate="animate"
          className="flex px-[0.5rem]"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 },
            },
          }}
          exit={{ opacity: 0 }}
        >
          {textArray.map((letter, index) => (
            <motion.span
              key={index + letter}
              className={content ? "text-purple-600" : (index < 4 ? `text-[#21573e]` : `text-[#6c757d]`)}
              variants={{
                initial: { opacity: 0, y: 20, x: 20 },
                animate: { opacity: 1, y: 0, x: 0 },
              }}
              exit={{ opacity: 0, y: 20, x: 20 }}
            >
              <Typography variant="h3" fontWeight={`bold`}>
                {letter}
              </Typography>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default LoadingPage;
