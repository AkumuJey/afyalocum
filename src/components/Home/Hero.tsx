import { Button, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { motion } from "framer-motion";

const HeroHeader = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom textAlign={`center`}>
        Connect with Healthcare Anytime, Anywhere
      </Typography>
    </>
  );
};

const HeroContent = () => {
  return (
    <>
      <Typography variant="h6" paragraph textAlign={`center`}>
        Access quality healthcare from the comfort of your home. Our
        telemedicine app provides secure and convenient video consultations with
        licensed professionals.
      </Typography>
    </>
  );
};

const Hero = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (direction: string) => {
    navigate(direction);
  };

  return (
    <motion.div
      className="py-[4rem] max-w-2xl mx-auto "
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroHeader />
      <HeroContent />
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
      {/* </Container> */}
    </motion.div>
  );
};

export default Hero;
