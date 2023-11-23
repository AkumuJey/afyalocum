// import Adverts from "../components/Home/Adverts";
import Hero from "../components/Home/Hero";
// import TopJobs from "../components/Home/NewJobs";

import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  const testimonies = [
    {
      id: 1,
      title: "One",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dictasapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.",
    },
    {
      id: 2,
      title: "Two",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dictasapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.",
    },
    {
      id: 3,
      title: "Three",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dictasapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.",
    },
  ];
  return (
    <>
      <Box component={`div`}>
        <Hero />
        <Container
          sx={{
            display: "flex",
            flexDirection: {
              xs: `column`,
              md: `row`,
            },
            gap: "2rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          {testimonies.map((testimony) => {
            return (
              <Testimonials testimony={testimony} key={testimony.id}/>
            );
          })}
          {/* <Paper elevation={3}>
            <Box p={2}>
              <Typography component={`p`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                sapiente totam dolorem ipsa exercitationem aliquid sit optio!
                Provident, eum reiciendis impedit vitae maiores adipisci non
                necessitatibus suscipit consequuntur. Quam et maiores pariatur
                necessitatibus quidem eum quae modi. Laborum, recusandae
                ratione.
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography component={`p`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                sapiente totam dolorem ipsa exercitationem aliquid sit optio!
                Provident, eum reiciendis impedit vitae maiores adipisci non
                necessitatibus suscipit consequuntur. Quam et maiores pariatur
                necessitatibus quidem eum quae modi. Laborum, recusandae
                ratione.
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography component={`p`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                sapiente totam dolorem ipsa exercitationem aliquid sit optio!
                Provident, eum reiciendis impedit vitae maiores adipisci non
                necessitatibus suscipit consequuntur. Quam et maiores pariatur
                necessitatibus quidem eum quae modi. Laborum, recusandae
                ratione.
              </Typography>
            </Box>
          </Paper> */}
        </Container>
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
            paragraph
            textAlign={`center`}
            gutterBottom
            fontSize={`1.2rem`}
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
  );
};

export default Home;
