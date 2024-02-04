import { Alert } from "@mui/material";
interface PropTypes{
  handleClose: () => void
}
const LoginError = ({handleClose}: PropTypes) => {
  return (
    <>
    <Alert severity="error" onClose={handleClose}>Incorrect password or email! Try again.</Alert>
    </>
  );
};

export default LoginError;
