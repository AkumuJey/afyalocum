import { Input, InputLabel } from "@mui/material";

import { ChangeEvent, useState } from "react";

const PageOne = () => {
  const ariaLabel = { "aria-label": "description" };
  const [partOne, setPartOne] = useState({ title: "", requirements: "" });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPartOne({ ...partOne, [id]: value });
  };
 
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
      <Input
        id="title"
        value={partOne.title}
        onChange={handleInputChange}
        autoComplete="off"
        placeholder="Doctor, Dentist, Pharmacist etc"
        inputProps={ariaLabel}
        required
        className="w-full px-3"
      />
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
        value={partOne.requirements}
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
