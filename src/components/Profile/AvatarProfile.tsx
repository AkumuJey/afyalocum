import { useState, ChangeEvent } from "react";
import {
  InputLabel,
  Button,
  Avatar,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

import { styled } from "@mui/material/styles";


interface Props{
  imageUrl: string
}
const AvatarProfile = ({imageUrl} : Props) => {
  const [take, setTake] = useState(true);
  const [organizationInfo, setOrganizationInfo] = useState({
    image: "",
  });
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
  const { image } = organizationInfo;
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setOrganizationInfo({
      ...organizationInfo,
      image: URL.createObjectURL(e.target.files[0]),
    });
    setTake(false);
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
              src={imageUrl}
              sx={{ width: "5rem", height: "5rem" }}
            />
          </Grid>
          {/* <Grid item  display="flex" justifyContent="center"> */}
          <div className="flex justify-center items-center">
          <Button onClick={() => setIsEditable(true)} variant="contained">
              Edit
            </Button>
          </div>
            
          {/* </Grid> */}
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
            {take ? "Upload Image" : "Hospital's Image"}
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
              Update profile image
              <VisuallyHiddenInput
                type="file"
                id="image"
                required
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
              />
            </Button>
          )}
          {image.length > 0 && (
            <div className="flex flex-col justify-between gap-1 w-full">
              <Avatar
                alt="Profile Image"
                src={image}
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
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!image.length}
            >
              Save
            </Button>
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
