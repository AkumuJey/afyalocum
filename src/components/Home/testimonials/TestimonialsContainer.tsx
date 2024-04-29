import { Container } from "@mui/material";
import TEstimonialsHeader from "./TestimonialsHeader";
import TestimonialsArrayDisplay from "./TestimonialsArrayDisplay";

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
        <TEstimonialsHeader />
        <TestimonialsArrayDisplay />
      </Container>
    </>
  );
};

export default TestimonialsContainer;
