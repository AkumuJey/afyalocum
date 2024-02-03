import { LoadingButton } from "@mui/lab";

interface PropTypes {
  loading: boolean;
}

const SubmitAndLoadButton = ({ loading }: PropTypes) => {
  return (
    <>
      <LoadingButton
        type="submit"
        variant="contained"
        sx={{ width: "100%", }}
        color="secondary"
        loading={loading}
      >
        Login
      </LoadingButton>
    </>
  );
};

export default SubmitAndLoadButton;
