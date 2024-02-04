import { Google } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    width: "95%",
    maxWidth: "400px",
    minHeight: "30px",
   
    mx: "auto",
    my: "auto",
  }

const GoogleSignInButton = () => {
  return (
    <>
      <Paper elevation={3} sx={containerStyles}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%", }}
          startIcon={<Google />}
        >
            Sign in with Google
        </Button>
      </Paper>
    </>
  );
};

export default GoogleSignInButton;
