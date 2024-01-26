import { Link } from "react-router-dom";
import { HeroButton as Button } from "./HeroButton";

const LoggedoutDisplayButtons = () => {
  return (
    <>
      <Button xAnimationDirection={-40}>
        <Link to={`/register`}>Get Started</Link>
      </Button>
      <Button xAnimationDirection={40}>
        <Link to={`/about`}>Learn More</Link>
      </Button>
    </>
  )
}

export default LoggedoutDisplayButtons