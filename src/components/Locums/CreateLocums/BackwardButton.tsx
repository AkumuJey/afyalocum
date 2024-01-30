import { Button } from "@mui/material";
interface PropTypes {
  handlePreviousStep: () => void;
}

const BackwardButton = ({ handlePreviousStep }: PropTypes) => {
  return (
    <>
      <Button variant="contained" type="button" onClick={handlePreviousStep}>
        Back
      </Button>
    </>
  );
};

export default BackwardButton;
