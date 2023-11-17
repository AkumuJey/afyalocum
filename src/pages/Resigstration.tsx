import { useState, ChangeEvent, FormEvent } from "react";
import {
  Input,
  Box,
  InputLabel,
  TextareaAutosize,
  Paper,
  Button,
  Avatar,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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

const Resigstration = () => {
  const ariaLabel = { "aria-label": "description" };
  const [organizationInfo, setOrganizationInfo] = useState({
    name: "",
    password: "",
    email: "",
    description: "",
    image: "",
  });

  const [take, setTake] = useState(true)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted", organizationInfo);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setOrganizationInfo({ ...organizationInfo, [id]: value });
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    console.log(e.target.files[0]);

    setOrganizationInfo({
      ...organizationInfo,
      image: URL.createObjectURL(e.target.files[0]),
    });
    setTake(false)
  };

  const handleRetake = () => {
    setTake(!take)
  }

  return (
    <div className="flex justify-center items-center w-full h-full py-0 md:py-[2rem]">
      <Paper
        elevation={3}
        sx={{
          width: {
            xs: "100%",
            md: "60%",
          },
          backgroundColor: "lightgray",
          padding: 3,
        }}
      >
        <Box
          component="form"
          sx={{
            // "& > :not(style)": { m: 1 },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            gap: "1.5rem",
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <InputLabel
            htmlFor="image"
            sx={{
              fontWeight: "bold",
              color: "black",
              width: "100%",
            }}
          >
            {take ? 'Upload Image' : "Hospital's Image"}
          </InputLabel>
          {take &&
          <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: "blue",
          }}
        >
           Upload Image
          <VisuallyHiddenInput
            type="file"
            id="image"
            required
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
        </Button> 
          }
          {organizationInfo.image.length > 0 && (
            <div className="flex flex-col justify-between gap-1 w-full">
              <Avatar
                alt="Profile Image"
                src={organizationInfo.image}
                sx={{ width: "5rem", height: "5rem" }}
              />
              <div>
                <Button
                  variant="outlined"
                  sx={{
                    width: "auto",
                    backgroundColor: "teal",
                    borderBlockColor: "black",
                    color: "white"
                  }}
                  onClick={handleRetake}
                >
                  {take ? "Use Initial Image" : "Reatake Image"}
                </Button>
              </div>
            </div>
          )}
          <InputLabel
            htmlFor="name"
            sx={{
              fontWeight: "bold",
              color: "black",
              width: "100%",
            }}
          >
            Name of Organization:
          </InputLabel>
          <Input
            id="name"
            value={organizationInfo.name}
            onChange={handleInputChange}
            placeholder="Organization's Name"
            inputProps={ariaLabel}
            required
            className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
          />
          <InputLabel
            htmlFor="email"
            sx={{
              fontWeight: "bold",
              color: "black",
              width: "100%",
            }}
          >
            Email:
          </InputLabel>
          <Input
            id="email"
            type="email"
            value={organizationInfo.email}
            onChange={handleInputChange}
            placeholder="example@email.com"
            required
            inputProps={ariaLabel}
            className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
          />
          <InputLabel
            htmlFor="password"
            sx={{
              fontWeight: "bold",
              color: "black",
              width: "100%",
            }}
          >
            Password:
          </InputLabel>
          <Input
            id="password"
            type="password"
            value={organizationInfo.password}
            onChange={handleInputChange}
            placeholder="password"
            required
            inputProps={ariaLabel}
            className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
          />
          <InputLabel
            htmlFor="description"
            sx={{
              fontWeight: "bold",
              color: "black",
              width: "100%",
            }}
          >
            Describe the Hospital:
          </InputLabel>
          <TextareaAutosize
            maxRows={5}
            maxLength={200}
            id="description"
            value={organizationInfo.description}
            onChange={handleInputChange}
            required
            placeholder="Describe Your Hospital"
            className="max-h-[200px] min-h-[150px] border-none outline-none p-3 w-full rounded-md bg-white overflow-hidden"
          />
          <Button variant="contained" type="submit">
            Create Account
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default Resigstration;
