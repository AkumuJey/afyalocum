import { Button } from "@mui/material";
interface PropTypes {
    next: boolean;
    handleNextStep: () => void;
  }

const ForwardButton = ({next, handleNextStep}: PropTypes) => {
  return (
    <>
            <Button
              variant="contained"
              onClick={handleNextStep}
              disabled={!next}
            >
              Next
            </Button>
          </>
  )
}

export default ForwardButton