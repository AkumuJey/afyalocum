import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

interface PartOne {
  title: string;
  requirements: string;
}

interface PropTypes extends PartOne {
  handlePartOne: (partThree: PartOne) => void;
}

const PageOne = ({ title, requirements, handlePartOne }: PropTypes) => {
  const ariaLabel = { "aria-label": "description" };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<SelectChangeEvent>) => {
    if ('name' in e.target) {
      const { name, value } = e.target;
      let goal = { [name]: value };
      handlePartOne(goal);
    }
  };

  const professions = [
    "Select Desired Profession",
    "Doctor",
    "Pharmacist",
    "Dentist",
    "Nurse",
    "Laboratory Technologist",
    "Physiotherapist"
  ];

  return (
    <>
      <InputLabel
        htmlFor="title"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Job Title:
      </InputLabel>
      <Select
        sx={{ minWidth: "150px", m: 1 }}
        labelId="title"
        id="title"
        name="title"
        onChange={handleInputChange}
        value={title}
      >
        {professions.map((profession) => (
          <MenuItem value={profession} key={profession}>
            {profession}
          </MenuItem>
        ))}
      </Select>
      <InputLabel
        htmlFor="requirements"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Requirements:
      </InputLabel>
      <Input
        id="requirements"
        name="requirements"
        value={requirements}
        onChange={handleInputChange}
        autoComplete="off"
        placeholder="e.g. MBCHB, 2 years experience"
        inputProps={ariaLabel}
        required
        className="w-full px-3"
      />
    </>
  );
};

export default PageOne;
