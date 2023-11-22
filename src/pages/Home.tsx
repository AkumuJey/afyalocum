// import Adverts from "../components/Home/Adverts";
import Hero from "../components/Home/Hero";
// import TopJobs from "../components/Home/NewJobs";

import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const Home = () => {
  return (
    // <div className="min-h-screen flex flex-col">
    //   <Hero className="bg-white w-full h-auto flex flex-row overflow-auto" />
    //   <div className="min-w-full text-center font-bold text-4xl py-3 md:py-6">
    //     <h1>Recently added locum jobs</h1>
    //   </div>
    //   <div className="flex flex-col md:flex-row justify-center md:justify-around">
    //     <TopJobs />
    //     <TopJobs />
    //     <TopJobs />
    //   </div>
    //   <Adverts />
    // </div>
    <>
      <Box component={`div`}>
        <Hero/>
        <Container sx={{
          display: 'flex',
          flexDirection: {
            xs: `column`,
            md: `row`
          },
          gap: '2rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <Paper elevation={3} >
            <Box p={2}>
              <Typography component={`p`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography component={`p`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography component={`p`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.
              </Typography>
            </Box>
          </Paper>
        </Container>
        <Container sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "85%"
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
        >
          <Typography paragraph textAlign={`center`} gutterBottom fontSize={`1.2rem`}>
            We are approved by:
          </Typography>
          <Grid container justifyContent={`space-around`}>
            <Grid item>
              <Typography variant="h6">KMPDC</Typography>
              <Container>Logo</Container>
            </Grid>
            <Grid item>
              <Typography variant="h6">KMPDC</Typography>
              <Container>Logo</Container>
            </Grid>
            <Grid item width={100}>
              <Typography variant="h6">KMPDC</Typography>
              <Container>Logo</Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
