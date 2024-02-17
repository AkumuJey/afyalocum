import { Link } from "react-router-dom"
import HeroButton from "./HeroButton"


const RegistrationButton = () => {
  return (
    <HeroButton>
        <Link to={`/register`}>Get Started</Link>
    </HeroButton>
  )
}

export default RegistrationButton