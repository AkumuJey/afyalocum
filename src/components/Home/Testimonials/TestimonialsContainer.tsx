import { Container, Typography } from "@mui/material";
import Testimonials from ".//Testimonial";
import useTestimoniesHook from "./useTestimoniesHook";


const TestimonialsContainer = () => {
    const testimonies = useTestimoniesHook()
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            xs: `column`,
            md: `row`,
          },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component={`h2`}
          minWidth={`100%`}
          fontWeight={`bold`}
        >
          Testimonials
        </Typography>
        {testimonies.map((testimony) => {
          return <Testimonials testimony={testimony} key={testimony.id} />;
        })}
      </Container>
    </>
  );
};

export default TestimonialsContainer;
