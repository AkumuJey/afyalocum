import AboutContentComponent from "./AboutContentComponent";
import useAboutContents from "./useAboutContents";

const AboutContentsArrayDisplay = () => {
  const aboutContent = useAboutContents();
  return (
    <>
      {aboutContent.map((content, index, array) => (
        <AboutContentComponent
          content={content}
          index={index}
          array={array}
          key={content.id}
        />
      ))}
    </>
  );
};

export default AboutContentsArrayDisplay;
