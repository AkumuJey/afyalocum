import { Input, InputLabel, TextareaAutosize } from "@mui/material";

import { ChangeEvent, useState } from "react";

const PageOne = () => {
  const ariaLabel = { "aria-label": "description" };
  const [partOne, setPartOne] = useState({title: "", requirements: "", description: ""})
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        className="w-full bg-white px-3 py-1 rounded-md overflow-hidden"
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
        className="w-full bg-white px-3 py-1 rounded-md overflow-hidden"
      />
      <InputLabel
        htmlFor="description"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Job Description:
      </InputLabel>
      <TextareaAutosize
        maxRows={3}
        maxLength={150}
        id="description"
        value={partOne.description}
        onChange={handleInputChange}
        required
        placeholder=" Roles are ..."
        className="max-h-[100px] min-h-[80px] px-3 py-1 w-full rounded-md bg-white overflow-hidden"
      />
    </>
  );
};

export default PageOne;
