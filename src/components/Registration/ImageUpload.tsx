import { ChangeEvent } from "react";
import { InputLabel, Button, Avatar } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

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

interface Props {
  take: boolean;
  image: string;
  disabled: boolean;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRetake: () => void;
}
const ImageUpload = ({
  take,
  image,
  disabled,
  handleImageChange,
  handleRetake,
}: Props) => {
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
        {take ? "Upload Image" : "Hospital's Image"}
      </InputLabel>
      {take && (
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
          sx={{
            backgroundColor: "blue",
            opacity: disabled ? "30%" : "100%",
            cursor: disabled ? "not-allowed" : "pointer"
          }}
        >
          Upload Image
          <VisuallyHiddenInput
            type="file"
            disabled={disabled}
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
    </>
  );
};

export default ImageUpload;
