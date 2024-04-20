import AboutContentsArrayDisplay from "../components/About/AboutContentsArrayDisplay";
import SocialMediaIconsContainer from "../components/About/SocialMediaIconsContainer";
import RouterAnimation from "./RouterAnimation";

const About = () => {
  document.title = "AfyaLocum - About"
  return (
    <RouterAnimation>
      <div className="flex flex-col items-center valid-height py-[2rem]">
        <AboutContentsArrayDisplay />
        <SocialMediaIconsContainer />
      </div>
    </RouterAnimation>
  );
};

export default About;
