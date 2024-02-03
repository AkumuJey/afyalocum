import { Paper } from "@mui/material";
import { ReactNode } from "react";
interface PropTypes {
  children: ReactNode;
}

const LoginLayout = ({ children }: PropTypes) => {
  return (
    <>
      <Paper
        elevation={3}
        component={`div`}
        sx={{
          width: "95%",
          maxWidth: "400px",
          mx: "auto",
          my: "auto",
          padding: "1rem",
          backgroundColor: "white",
        }}
      >
        {children}
      </Paper>
    </>
  );
};

export default LoginLayout;
