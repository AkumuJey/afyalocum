import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = (direction: string) => {
    navigate(direction);
  };
  return (
    <Container maxWidth="md" sx={{paddingTop: '2rem'}}>
      <Typography variant="h3" component="h1" gutterBottom textAlign={`center`}>
        Connect with Healthcare Anytime, Anywhere
      </Typography>
      <Typography variant="h6" paragraph textAlign={`center`}>
        Access quality healthcare from the comfort of your home. Our
        telemedicine app provides secure and convenient video consultations with
        licensed professionals.
      </Typography>
      <Container maxWidth="xs">
        <Grid container justifyContent={`space-around`}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClick(`register`)}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => handleClick(`about`)}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Hero;
