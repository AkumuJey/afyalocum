import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import useProfileDescription from "../../hooks/useProfileDescription";

interface PropTypes {
  handleError: (msg: string) => void;
  handleSuccess: (msg: string) => void;
}
const DescriptionProfile = ({ handleSuccess, handleError }: PropTypes) => {
  const { isEditable, loading, description, enableEdit, disableEdit, handleSubmit } =
    useProfileDescription(handleSuccess,  handleError);
  return (
    <>
      {!isEditable && (
        <Grid container justifyContent={`space-between`} spacing={2}>
          <Grid item>
            <Typography fontWeight={`bold`}>Description: </Typography>
            <Typography>{description}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={enableEdit} variant="contained">
              Edit
            </Button>
          </Grid>
        </Grid>
      )}

      {isEditable && (
        <Box
          component={`form`}
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <Box component={`div`} sx={{ width: "100%" }}>
            <InputLabel
              htmlFor="description"
              sx={{
                fontWeight: "bold",
                color: "black",
                width: "100%",
                textAlign: "left",
              }}
            >
              Description
            </InputLabel>
            <TextareaAutosize
              maxRows={5}
              maxLength={200}
              id="description"
              name="description"
              autoComplete="off"
              required
              placeholder="Describe Your Hospital"
              className="max-h-[200px] min-h-[150px] p-3 w-full overflow-hidden"
              defaultValue={description}
            />
          </Box>
          <Box
            component={`div`}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
              width: "100%",
            }}
          >
            <LoadingButton
              type="submit"
              variant="contained"
              color="secondary"
              loading={loading}
              disabled={loading}
            >
              Update Description
            </LoadingButton>
            <Button
              type="button"
              color="secondary"
              onClick={disableEdit}
              variant="outlined"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DescriptionProfile;
