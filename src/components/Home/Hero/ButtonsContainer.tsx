import { Grid } from "@mui/material";
import { HeroButton as Button } from "./HeroButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const ButtonsContainer = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Grid container justifyContent={`space-around`}>
      {currentUser ? (
        <>
          <Button>
            <Link to={`/locums/create-new`}>Create New Locum</Link>
          </Button>
          <Button>
            <Link to={`/locums`}>View Listed Locums</Link>
          </Button>
        </>
      ) : (
        <>
          <Button>
            <Link to={`/register`}>Get Started</Link>
          </Button>
          <Button>
            <Link to={`/about`}>Learn More</Link>
          </Button>
        </>
      )}
    </Grid>
  );
};

export default ButtonsContainer;
