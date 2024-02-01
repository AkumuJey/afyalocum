import { Alert, Snackbar } from "@mui/material";
import { transitionRight } from "./TransitionRight";
interface PropTypes {
  open: boolean;
  handleClose: () => void;
}

const CreatedLocumNotification = ({ open, handleClose }: PropTypes) => {
  return (
    <>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        TransitionComponent={transitionRight}
        transitionDuration={500}
      >
        <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
          Locum listed Successlly
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreatedLocumNotification;
