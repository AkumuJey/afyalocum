import { Button } from "@mui/material";
interface PropTypes {
  validSubmission: boolean;
  loading: boolean
}

const SubmissionButton = ({ validSubmission, loading }: PropTypes) => {
  return (
    <>
      <Button variant="contained" type="submit" disabled={!validSubmission || loading}>
        Save Vacancy
      </Button>
    </>
  );
};

export default SubmissionButton;
