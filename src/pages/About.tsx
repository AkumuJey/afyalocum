import { Paper, Typography } from "@mui/material";
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
    {
      id: 3,
      title: "Summary",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit! Aliquid, alias voluptas. Corporis totam eligendi perferendis error, eaque quam fugiat beatae vero laudantium a ut facere! Facere officia ad, accusamus repudiandae et nesciunt natus ab deserunt accusantium itaque voluptatum",
    },
  ];

  return (
    <motion.div
      className="flex flex-col gap-3 py-3 md:py-[4rem] justify-around items-center w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y:0 }}
      exit={{opacity: 0}}
      transition={{ duration: .5}}
    >
      {aboutContent.map((content) => (
        <Paper
          component="div"
          elevation={3}
          sx={{
            width: {
              xs: "100%",
              md: "80%",
            },
            backgroundColor: "#F9F9F9",
            padding: 3,
            my: "0.6rem",
            borderRadius: 8, 
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          key={content.id}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 700, // Increase font weight for emphasis
              marginBottom: 2, // Add spacing between title and body
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
              lineHeight: 1.6, // Improve readability with increased line height
            }}
          >
            {content.body}
          </Typography>
        </Paper>
      ))}
    </motion.div>
  );
};

export default About;
