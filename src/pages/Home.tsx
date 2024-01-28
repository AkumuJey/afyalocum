
import { Box } from "@mui/material";
import Hero from "../components/Home/Hero/Hero";
import SponsorsAndApprovalsContainer from "../components/Home/SponsorsAndApprovals/SponsorsAndApprovalsContainer";
import TestimonialsContainer from "../components/Home/Testimonials/TestimonialsContainer";
import RouterAnimation from "./RouterAnimation";

const Home = () => {
  
  return (
    <RouterAnimation>
      <>
        <Box component={`div`}>
          <Hero />
          <TestimonialsContainer />
          <SponsorsAndApprovalsContainer />
        </Box>
      </>
    </RouterAnimation>
  );
};

export default Home;
