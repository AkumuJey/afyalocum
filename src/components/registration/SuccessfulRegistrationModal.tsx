import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "0.3rem",
};
interface PropTypes {
  open: boolean;
  handleClose: () => void;
}
const SuccessfulRegistrationModal = ({ handleClose, open }: PropTypes) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="registration-success-modal-title"
      aria-describedby="registration-success-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          color="success"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Registration Successful!
        </Typography>
        <Typography sx={{ mt: 2, textAlign: "center" }}>
          A verification link has been sent to your email.
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 3, width: "100%" }}
        >
          <Link to={`/login`}>Go to Login</Link>
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessfulRegistrationModal;
