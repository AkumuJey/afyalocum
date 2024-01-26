import { Button, Container, Grid } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { motion } from "framer-motion";
import Header from "./Header";
import Content from "./Content";

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
      <Header />
      <Content />
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
