import { CloudUpload } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import { updateProfile, User } from "firebase/auth";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../firebase/firebase";

interface PropsTypes {
  currentUser: User;
  handleSuccess: (message: string) => void;
  handleError:  (message: string) => void;
}
const AvatarProfile = ({ currentUser, handleSuccess, handleError }: PropsTypes) => {
  const [take, setTake] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const handleRetake = () => {
    setTake(!take);
  };

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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const imageHolder = e.target.files[0];
    setImage(imageHolder);
    setImageUrl(URL.createObjectURL(imageHolder));
    setTake(false);
  };

  const { photoURL } = currentUser;

  const updateImage = async (image: File) => {
    const storageRef = ref(storage, `images/${currentUser.uid}`);
    await uploadBytes(storageRef, image);
    const downloadUrl = await getDownloadURL(storageRef);
    console.log(downloadUrl)
    await updateProfile(currentUser, {
      photoURL: downloadUrl,
    });
  };
  const handlePhotoUpdate = async () => {
    setLoading(true);
    try {
      if (photoURL) {
        const oldPhotoUrl = ref(storage, photoURL);
        console.log(oldPhotoUrl)
        await deleteObject(oldPhotoUrl);
      }
      await updateImage(image as File);
      handleSuccess("Profile Photo Updated Successfully")
    } catch (_error) {
      handleError("Error uploading image")
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box>
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
            <Button onClick={() => setIsEditable(true)} variant="contained">
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
          {take && (
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
              sx={{
                backgroundColor: "blue",
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
            <div className="flex flex-col justify-between gap-1 w-full">
              <Avatar
                alt="Profile Image"
                src={imageUrl}
                sx={{ width: "5rem", height: "5rem" }}
              />
              <div>
                <Button
                  variant="outlined"
                  sx={{
                    width: "auto",
                    backgroundColor: "teal",
                    borderBlockColor: "black",
                    color: "white",
                  }}
                  onClick={handleRetake}
                >
                  {take ? "Use Initial Image" : "Reatake Image"}
                </Button>
              </div>
            </div>
          )}
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
              disabled={!imageUrl || loading}
              onClick={handlePhotoUpdate}
            >
              Update Profile Photo
            </LoadingButton>
            <Button
              type="button"
              color="secondary"
              onClick={() => setIsEditable(false)}
              variant="outlined"
            >
              Cancel
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default AvatarProfile;
