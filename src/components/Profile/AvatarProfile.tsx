import { CloudUpload } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import { User } from "firebase/auth";
import useProfileImageUpdate from "../../hooks/useProfileImageUpdate";

interface PropsTypes {
  currentUser: User;
}
const AvatarProfile = ({ currentUser }: PropsTypes) => {
  const { photoURL } = currentUser;
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

  const {
    take,
    loading,
    imageUrl,
    isEditable,
    image,
    handlePhotoUpdate,
    handleRetake,
    handleImageChange,
    enableEditing,
    disableEditing,
  } = useProfileImageUpdate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {!isEditable && (
        <Grid
          container
          justifyContent={`space-between`}
          justifyItems={`center`}
          spacing={2}
        >
          <Grid item>
            <Typography fontWeight={`bold`}>Profile Photo: </Typography>
            <Avatar
              alt="Profile Image"
              src={photoURL as string}
              sx={{ width: "5rem", height: "5rem" }}
            />
          </Grid>
          <div className="flex justify-center items-center">
            <Button onClick={enableEditing} variant="contained">
              Edit
            </Button>
          </div>
        </Grid>
      )}
      {isEditable && (
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
          {take && !image && (
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
          )}
          {imageUrl && (
            <div className="flex justify-between items-center gap-1 w-full">
              <Avatar
                alt="Profile Image"
                src={imageUrl}
                sx={{ width: "5rem", height: "5rem" }}
              />
              <Button
                variant="outlined"
                sx={{
                  width: "auto",
                  backgroundColor: "teal",
                  borderBlockColor: "black",
                  color: "white",
                }}
                disabled={loading}
                onClick={handleRetake}
              >
                {take ? "Use Initial Image" : "Reatake Image"}
              </Button>
            </div>
          )}
          {image && (
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
                disabled={!imageUrl || loading || !image}
                onClick={handlePhotoUpdate}
              >
                Update Profile Photo
              </LoadingButton>
              <Button
                type="button"
                color="secondary"
                onClick={disableEditing}
                variant="outlined"
              >
                Cancel
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default AvatarProfile;
