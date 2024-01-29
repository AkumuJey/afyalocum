import { useEffect, useState } from "react";

const useHeroChildrenAnimation = () => {
  const [childrenAnimationStyles, setChildrenAnimationStyles] = useState({});
  useEffect(() => {
    const getHeroStyles = () => {
      const childrenVariants = {
        hidden: { y: "5rem", opacity: 0 },
        visible: { y: 0, opacity: 1, ttransition: { duration: 1,  } },
      };
      setChildrenAnimationStyles(childrenVariants);
    };
    getHeroStyles();
  }, []);
  return childrenAnimationStyles;
};

export default useHeroChildrenAnimation;
