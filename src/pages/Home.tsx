
import { Box } from "@mui/material";
import Hero from "../components/Home/Hero/Hero";
import SponsorsAndApprovalsContainer from "../components/Home/SponsorsAndApprovals/SponsorsAndApprovalsContainer";
import TestimonialsContainer from "../components/Home/Testimonials/TestimonialsContainerView";
import RouterAnimation from "./RouterAnimation";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "AfyaLocum"
  }, [])
  return (
    <RouterAnimation>
      <>
        <Box component={`div`} sx={{width: "100%"}}>
          <Hero />
          <TestimonialsContainer />
          <SponsorsAndApprovalsContainer />
        </Box>
      </>
    </RouterAnimation>
  );
};

export default Home;
