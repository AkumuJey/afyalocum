import { LoadingButton } from "@mui/lab";

interface PropTypes {
  loading: boolean;
  commonDisable: boolean;
}

const SubmitAndLoadButton = ({ loading, commonDisable }: PropTypes) => {
  return (
    <>
      <LoadingButton
        type="submit"
        variant="contained"
        sx={{ width: "100%" }}
        color="secondary"
        loading={loading}
        disabled={loading || commonDisable}
      >
        Login
      </LoadingButton>
    </>
  );
};

export default SubmitAndLoadButton;
