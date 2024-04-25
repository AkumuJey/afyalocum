import { LoadingButton } from "@mui/lab";
import { useParams } from "react-router-dom";
interface PropTypes {
  validSubmission: boolean;
  loading: boolean;
}

const SubmissionButton = ({ validSubmission, loading }: PropTypes) => {
  const { id } = useParams();
  return (
    <>
      <LoadingButton
        loading={loading}
        variant="contained"
        type="submit"
        disabled={!validSubmission || loading}
      >
        {id ? "Save Changes" : "Save Vacancy"}
      </LoadingButton>
    </>
  );
};

export default SubmissionButton;
