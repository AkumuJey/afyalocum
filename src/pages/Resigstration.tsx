import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Paper,
  Button,
} from "@mui/material";

// import { styled } from "@mui/material/styles";

import ImageUpload from "../components/registration/ImageUpload";
import NameRegistration from "../components/registration/NameRegistration";
import DescriptionInput from "../components/registration/DescriptionInput";
import EmailAndPasswordInput from "../components/registration/EmailAndPasswordInput";


const Resigstration = () => {
  const ariaLabel = { "aria-label": "description" };
  const [organizationInfo, setOrganizationInfo] = useState({
    name: "",
    password: "",
    email: "",
    description: "",
    image: "",
  });

  const [take, setTake] = useState(true);
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
    setOrganizationInfo({
      ...organizationInfo,
      image: URL.createObjectURL(e.target.files[0]),
    });
    setTake(false);
  };

  const handleRetake = () => {
    setTake(!take);
  };

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
          name="registration"
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
          <ImageUpload
            handleImageChange={handleImageChange}
            image={organizationInfo.image}
            handleRetake={handleRetake}
            take={take}
          />
          <NameRegistration
            ariaLabel={ariaLabel}
            handleInputChange={handleInputChange}
            name={organizationInfo.name}
          />
          <DescriptionInput
            description={organizationInfo.description}
            handleInputChange={handleInputChange}
          />
          <EmailAndPasswordInput
            email={organizationInfo.email}
            password={organizationInfo.password}
            ariaLabel={ariaLabel}
            handleInputChange={handleInputChange}
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
