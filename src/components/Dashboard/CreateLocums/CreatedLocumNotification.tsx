import { Alert, Snackbar, Slide, SlideProps } from "@mui/material";
interface PropTypes {
  open: boolean;
  handleClose: () => void;
}

type TransitionProps = Omit<SlideProps, "direction">;

function transitionRight(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
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
