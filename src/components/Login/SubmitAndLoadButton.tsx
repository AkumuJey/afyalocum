import { LoadingButton } from "@mui/lab";

interface PropTypes {
  loading: boolean;
  spinner: boolean;
}

const SubmitAndLoadButton = ({ loading, spinner }: PropTypes) => {
  return (
    <>
      <LoadingButton
        type="submit"
        variant="contained"
        sx={{ width: "100%" }}
        color="secondary"
        loading={loading && spinner}
        disabled={loading}
      >
        Login
      </LoadingButton>
    </>
  );
};

export default SubmitAndLoadButton;
