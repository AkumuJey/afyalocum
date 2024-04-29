import { Link } from "react-router-dom";
import HeroButton from "./HeroButton";

const LoggedoutDisplayButtons = () => {
  return (
    <>
      <HeroButton xAnimationDirection={-40}>
        <Link to={`/register`}>Get Started</Link>
      </HeroButton>
      <HeroButton xAnimationDirection={40}>
        <Link to={`/about`}>Learn More</Link>
      </HeroButton>
    </>
  )
}

export default LoggedoutDisplayButtons