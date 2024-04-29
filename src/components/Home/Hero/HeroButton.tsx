import { Button } from "@mui/material";
import { ReactNode } from "react";
import ButtonAnimation from "./ButtonAnimation";

interface PropTypes {
  children: ReactNode;
  xAnimationDirection: number;
}
 const HeroButton = ({ children, xAnimationDirection }: PropTypes) => {
  return (
    <ButtonAnimation xAnimationDirection={xAnimationDirection}>
      <Button variant="outlined" color="primary">
        {children}
      </Button>
    </ButtonAnimation>
  );
};

export default HeroButton
