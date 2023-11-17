import { Paper, Typography } from "@mui/material";

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
    <div className="flex flex-col gap-3 py-3 md:py-[4rem] justify-around valid-height items-center w-full">
      {
        aboutContent.map((content) => (
      <Paper
        component="div"
        elevation={3}
        sx={{
          width: {
            xs: "100%",
            md: "80%",
          },
          backgroundColor: "lightgray",
          padding: 3,
        }}
        key={content.id}
      >
        <h1 className="text-center font-bold text-3xl">{content.title}</h1>
        <Typography
        paragraph={true}
          component="p"
          sx={{
            width: "100%",
          }}
        >
          {content.body}
        </Typography>
      </Paper>
        ))
      }
    </div>
  );
};

export default About;
