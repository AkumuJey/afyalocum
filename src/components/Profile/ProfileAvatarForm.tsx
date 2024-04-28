import { CloudUpload } from "@mui/icons-material";
import { Avatar, Box, Button, InputLabel } from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import useProfileImageUpdate from "../../hooks/useProfileImageUpdate";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
interface PropTypes {
  disableEditing: () => void;
}
const ProfileAvatarForm = ({ disableEditing }: PropTypes) => {
  const {
    take,
    loading,
    imageUrl,
    image,
    handlePhotoUpdate,
    handleRetake,
    handleImageChange,
  } = useProfileImageUpdate();

  const handleSubmit = async () => {
    await handlePhotoUpdate()
    disableEditing()
  }
  return (
    <>
      <InputLabel
        htmlFor="image"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        {take ? "Upload Image" : "Hospital's Profile Photo"}
      </InputLabel>
      {take && (
        <>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUpload />}
            sx={{
              backgroundColor: "blue",
              width: "fit-content",
            }}
          >
            Update new profile photo
            <VisuallyHiddenInput
              type="file"
              id="image"
              required
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              contentEditable
            />
          </Button>
        </>
      )}
      {imageUrl && image && (
        <div className="flex justify-between items-center gap-1 w-full">
          <Avatar
            alt="Profile Image"
            src={imageUrl}
            sx={{ width: "5rem", height: "5rem" }}
          />
          <Button
            variant="contained"
            color="info"
            disabled={loading}
            onClick={handleRetake}
          >
            Reatake Image
          </Button>
        </div>
      )}
      <Box
        component={`div`}
        sx={{
          display: "flex",
          justifyContent: `${ image ? "space-between" : "flex-end"}`,
          gap: "2rem",
          width: "100%",
        }}
      >
        {image && (
          <LoadingButton
            type="submit"
            variant="contained"
            color="secondary"
            loading={loading}
            disabled={!imageUrl || loading || !image}
            onClick={handleSubmit}
          >
            Update Profile Photo
          </LoadingButton>
        )}
        <Button
          type="button"
          color="secondary"
          onClick={disableEditing}
          variant="outlined"
          disabled={loading}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default ProfileAvatarForm;
