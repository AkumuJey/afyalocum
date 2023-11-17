import { useState } from "react";
import {
  Input,
  Box,
  InputLabel,
  TextareaAutosize,
  Paper,
  Button,
} from "@mui/material";

const Resigstration = () => {
  const ariaLabel = { "aria-label": "description" };
  const [organizationInfo, setOrganizationInfo] = useState({
    name: '',
    password: '',
    email: '',
    description: ''
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(e);
  };

  const handleInputChange = (e:Event) => {
    const {id, value} = e.target
    setOrganizationInfo({...organizationInfo, [id]: value})
  }
  return (
    <div className="flex justify-center items-center w-full h-full py-[2rem]">
      <Paper
        elevation={5}
        sx={{
          width: "60%",
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
            defaultValue={organizationInfo.name}
            value={organizationInfo.name}
            onChange={handleInputChange}
            placeholder="Organization's Name"
            inputProps={ariaLabel}
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
            defaultValue={organizationInfo.email}
            value={organizationInfo.email}
            onChange={handleInputChange}
            placeholder="example@email.com"
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
            defaultValue={organizationInfo.password}
            value={organizationInfo.password}
            onChange={handleInputChange}
            placeholder="password"
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
            defaultValue={organizationInfo.description}
            value={organizationInfo.description}
            onChange={handleInputChange}
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
