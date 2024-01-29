import { motion } from "framer-motion";
import { Content } from "./useAboutContents";
import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";

interface PropTypes {
  content: Content;
  index: number;
  array: Content[];
}
const AboutContentComponent = ({ content, index, array }: PropTypes) => {
  const containerVariants = {
    hidden: { y: "4rem", opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: (index + 1) * 0.5} },
  };

  return (
    <motion.div
      className={` w-full md:w-4/5 ${
        index !== array.length - 1 ? "mb-[1rem]" : ""
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ContentHeader title={content.title} />
      <ContentBody body={content.body} />
    </motion.div>
  );
};

export default AboutContentComponent;
