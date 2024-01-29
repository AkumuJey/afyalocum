import { useEffect, useState } from "react";

const useParentAnimation = () => {
  const [parentAnimationStyles, setParentAnimationStyles] = useState({});
  useEffect(() => {
    const getHeroStyles = () => {
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { staggerChildren: 0.3,  } },
          };
          setParentAnimationStyles(containerVariants);
    };
    getHeroStyles();
  }, []);
  return parentAnimationStyles;
};

export default useParentAnimation;