import { Button, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Hero = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (direction: string) => {
    navigate(direction);
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: "2rem" }}>
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
              variant="outlined"
              color="primary"
              onClick={() =>
                handleClick(
                  `${currentUser ? "/locums/create-new" : "/register"}`
                )
              }
            >
              {currentUser ? "Create New Locum" : "Get Started"}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                handleClick(`${currentUser ? "/locums" : "/about"}`)
              }
            >
              {currentUser ? "View Listed Locums" : "Learn More"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Hero;
