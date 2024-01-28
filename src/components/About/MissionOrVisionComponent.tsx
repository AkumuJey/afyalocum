import { Typography } from "@mui/material";
import { motion } from "framer-motion";


interface Content {
  id: number;
  title: string;
  body: string;
}
interface PropTypes {
  content: Content;
  index: number;
  array: Content[];
}
const MIssionOrVisionCoponent = ({ content, index, array }: PropTypes) => {
  return (
    <motion.div
      className={` w-full md:w-4/5 ${
        index !== array.length - 1 ? "mb-[1rem]" : ""
      }`}
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: index + 1 }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 600, 
          marginBottom: 1, 
        }}
      >
        {content.title}
      </Typography>
      <Typography
        paragraph
        component="p"
        sx={{
          width: "100%",
          fontSize: "1rem", 
          lineHeight: 1.5, 
        }}
      >
        {content.body}
      </Typography>
    </motion.div>
  );
};

export default MIssionOrVisionCoponent;
