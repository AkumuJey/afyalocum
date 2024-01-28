import { Container } from "@mui/material";
import TEstimonialsHeader from "./TEstimonialsHeader";
import TestimonialsArrayDisplay from "./TestimonialsArrayDisplay";

const TestimonialsContainer = () => {
  
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
        <TEstimonialsHeader/>
        <TestimonialsArrayDisplay/>
      </Container>
    </>
  );
};

export default TestimonialsContainer;
