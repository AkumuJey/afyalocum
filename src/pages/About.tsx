import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const aboutContent = [
    {
      id: 1,
      title: "Mission",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit! Aliquid, alias voluptas. Corporis totam eligendi perferendis error, eaque quam fugiat beatae vero laudantium a ut facere! Facere officia ad, accusamus repudiandae et nesciunt natus ab deserunt accusantium itaque voluptatum",
    },
    {
      id: 2,
      title: "Vision",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit! Aliquid, alias voluptas. Corporis totam eligendi perferendis error, eaque quam fugiat beatae vero laudantium a ut facere! Facere officia ad, accusamus repudiandae et nesciunt natus ab deserunt accusantium itaque voluptatum",
    },
  ];

  return (
    <div className="flex flex-col items-center py-[2rem]">
      {aboutContent.map((content, index, array) => (
        <motion.div
          className={` w-full md:w-4/5 ${index !== array.length -1 ? "mb-[1rem]" : ""}`}
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: (index + 1) * 0.5 }}
          key={content.id}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 600, // Increase font weight for emphasis
              marginBottom: 1, // Add spacing between title and body
            }}
          >
            {content.title}
          </Typography>
          <Typography
            paragraph
            component="p"
            sx={{
              width: "100%",
              fontSize: "1rem", // Adjust the font size
              lineHeight: 1.5, // Improve readability with increased line height
            }}
          >
            {content.body}
          </Typography>
        </motion.div>
      ))}
      <motion.div
          className={`w-fit my-2 p-2 flex justify-center items-center gap-5 `}
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: (aboutContent.length + 1) * 0.5 || 0.5 }}
        >
          <IconButton><Facebook sx={{color: "blue", fontSize: "2rem"}}/></IconButton>
          <IconButton><Twitter sx={{color: "black", fontSize: "2rem"}}/></IconButton>
          <IconButton><Instagram sx={{color: "red", fontSize: "2rem"}}/></IconButton>
          <IconButton><LinkedIn sx={{color: "blue", fontSize: "2rem"}}/></IconButton>
        </motion.div>
    </div>
  );
};

export default About;
