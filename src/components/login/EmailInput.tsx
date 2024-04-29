import { Input, InputLabel } from "@mui/material";

interface PropTypes {
  loading: boolean;
}
const EmailInput = ({ loading }: PropTypes) => {
  return (
    <>
      <InputLabel
        htmlFor="email"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Email
      </InputLabel>
      <Input
        id="email"
        name="email"
        type="email"
        autoComplete="off"
        required
        disabled={loading}
        sx={{
          width: "100%",
          backgroundColor: "white",
          px: "0.5rem",
          py: "0.2rem",
        }}
      />
    </>
  );
};

export default EmailInput;
