import { Link } from "react-router-dom";
import HeroButton from "./HeroButton";

const LoggedinDisplayButtons = () => {
  return (
    <>
      <HeroButton xAnimationDirection={-40}>
        <Link to={`/dashboard/create-new-locum`}>Create New Locum</Link>
      </HeroButton>
      <HeroButton xAnimationDirection={40}>
        <Link to={`/dashboard`}>Manage Locums</Link>
      </HeroButton>
    </>
  );
};

export default LoggedinDisplayButtons;
