import { Paper } from "@mui/material";
import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  verificationSent: boolean;
}
const RecoverPasswordLayout = ({ children, verificationSent }: PropTypes) => {
  const layoutStyles = {
    width: "95%",
    maxWidth: "400px",
    mx: "auto",
    my: "auto",
    padding: "1rem",
    backgroundColor: verificationSent ? "teal" : "white",
  };
  return (
    <>
      <Paper elevation={3} component={`div`} sx={layoutStyles}>
        {children}
      </Paper>
    </>
  );
};

export default RecoverPasswordLayout;
