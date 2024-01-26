import { Button } from "@mui/material";
import { ReactNode } from "react";

interface PropTypes{
    handleClick: () => void
    children: ReactNode
}
const HeroButton = ({ children, handleClick }: PropTypes) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default HeroButton;
