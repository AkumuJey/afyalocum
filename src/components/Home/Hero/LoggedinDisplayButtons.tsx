import { Link } from "react-router-dom";
import { HeroButton as Button } from "./HeroButton";

const LoggedinDisplayButtons = () => {
  return (
    <>
        <Button xAnimationDirection={-40}>
          <Link to={`/locums/create-new`}>Create New Locum</Link>
        </Button>
        <Button xAnimationDirection={40}>
          <Link to={`/locums`}>View Listed Locums</Link>
        </Button>
    </>
  );
};

export default LoggedinDisplayButtons;
