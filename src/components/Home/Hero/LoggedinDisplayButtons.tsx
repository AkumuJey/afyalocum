import { Link } from "react-router-dom";
import { HeroButton as Button } from "./HeroButton";

const LoggedinDisplayButtons = () => {
  return (
    <>
        <Button xAnimationDirection={-40}>
          <Link to={`/dashboard/create-new-locum`}>Create New Locum</Link>
        </Button>
        <Button xAnimationDirection={40}>
          <Link to={`/dashboard`}>Manage Locums</Link>
        </Button>
    </>
  );
};

export default LoggedinDisplayButtons;
