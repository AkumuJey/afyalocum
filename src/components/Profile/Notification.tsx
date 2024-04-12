import { Alert, Slide, SlideProps, Snackbar } from "@mui/material";

type Severity = "success" | "error";
interface PropTypes {
  severity: Severity;
  message: string;
  open: boolean;
  handleClose: () => void
}
type TransitionProps = Omit<SlideProps, "direction">;

function transitionRight(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

const NotificationElement = ({ open, message, severity, handleClose }: PropTypes) => {
  return (
    <>
      <Snackbar
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
        TransitionComponent={transitionRight}
        transitionDuration={500}
      >
        <Alert
          variant="filled"
          severity={severity}
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          { message }
        </Alert>
      </Snackbar>
    </>
  );
};

export default NotificationElement;
