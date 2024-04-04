import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
interface PropTypes {
  validSubmission: boolean;
  loading: boolean
}

const SubmissionButton = ({ validSubmission, loading }: PropTypes) => {
  const { id } = useParams();
  return (
    <>
      <Button variant="contained" type="submit" disabled={!validSubmission || loading}>
        {id ? "Save Changes": "Save Vacancy"}
      </Button>
    </>
  );
};

export default SubmissionButton;
