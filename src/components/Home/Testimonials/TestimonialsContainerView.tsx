import { Container } from "@mui/material";
import TestimonialsHeader from "./TestimonialsHeaderView.tsx";
import TestimonialsArrayDisplay from "./TestimonialsArrayDisplayView.tsx";


const TestimonialsContainer = () => {
  const testimonyStyles = {
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
  };
  return (
    <>
      <Container sx={testimonyStyles}>
        <TestimonialsHeader />
        <TestimonialsArrayDisplay />
      </Container>
    </>
  );
};

export default TestimonialsContainer;
