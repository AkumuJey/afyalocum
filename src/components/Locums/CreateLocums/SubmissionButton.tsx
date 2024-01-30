import { Button } from "@mui/material";
interface PropTypes {
  validSubmission: boolean;
}

const SubmissionButton = ({ validSubmission }: PropTypes) => {
  return (
    <>
      <Button variant="contained" type="submit" disabled={!validSubmission}>
        Save Vacancy
      </Button>
    </>
  );
};

export default SubmissionButton;
