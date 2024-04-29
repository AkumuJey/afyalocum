import { useEffect } from "react";
import AboutContentsArrayDisplay from "../components/about/AboutContentsArrayDisplay";
import SocialMediaIconsContainer from "../components/about/SocialMediaIconsContainer";
import RouterAnimation from "./RouterAnimation";

const About = () => {
  useEffect(() => {
    document.title = "AfyaLocum - About";
  }, []);
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
