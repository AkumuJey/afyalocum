import { Slide, SlideProps } from "@mui/material";

type TransitionProps = Omit<SlideProps, "direction">;

export function transitionRight(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
  }