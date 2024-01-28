// import Adverts from "../components/Home/Adverts";
import Hero from "../components/Home/Hero/Hero";
// import TopJobs from "../components/Home/NewJobs";

import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

import RouterAnimation from "./RouterAnimation";
import TestimonialsContainer from "../components/Home/Testimonials/TestimonialsContainer";

const Home = () => {
  
  return (
    <RouterAnimation>
      <>
        <Box component={`div`}>
          <Hero />
          <TestimonialsContainer />
          <Container
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "85%",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Typography
              component={`h4`}
              textAlign={`center`}
              gutterBottom
              variant="h4"
              fontWeight={`bold`}
            >
              We are approved by:
            </Typography>
            <Grid
              container
              justifyContent={`space-around`}
              sx={{
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Grid item>
                <Typography variant="h6">KMPDC</Typography>
                <Avatar
                  alt="Logo"
                  src={``}
                  sx={{ width: "5rem", height: "5rem" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h6">KMPDC</Typography>
                <Avatar
                  alt="Logo"
                  src={``}
                  sx={{ width: "5rem", height: "5rem" }}
                />
              </Grid>
              <Grid item width={100}>
                <Typography variant="h6">KMPDC</Typography>
                <Avatar
                  alt="Logo"
                  src={``}
                  sx={{ width: "5rem", height: "5rem" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    </RouterAnimation>
  );
};

export default Home;
