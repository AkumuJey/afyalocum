import { Button } from "@mui/material";
import { ReactNode } from "react";

interface PropTypes{
    children: ReactNode
}
export const HeroButton = ({ children }: PropTypes) => {
  return (
    <Button
      variant="outlined"
      color="primary"
    >
      {children}
    </Button>
  );
};


