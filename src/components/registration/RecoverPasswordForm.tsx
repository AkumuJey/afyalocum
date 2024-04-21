import { LoadingButton } from "@mui/lab";
import { Input, InputLabel, Paper } from "@mui/material";

interface PropTypes {
  sendLink: () => void;
}
const AwaitingVerification = ({ sendLink }: PropTypes) => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: "95%",
          maxWidth: "500px",
          mx: "auto",
          bgcolor: "ButtonFace",
        }}
        component={`form`}
        onSubmit={sendLink}
      >
        <InputLabel
          htmlFor="email"
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
        >
          Email:
        </InputLabel>
        <Input
          id="email"
          name="email"
          autoComplete="off"
          required
          sx={{
            width: "100%",
            px: "0.5rem",
            py: "0.2rem",
            mb: "1rem",
          }}
        />
        <LoadingButton
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "100%" }}
          style={{ textTransform: "none" }}
        >
          Recover Password
        </LoadingButton>
      </Paper>
    </>
  );
};

export default AwaitingVerification;
