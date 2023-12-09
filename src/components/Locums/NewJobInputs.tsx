import { Input, InputLabel, TextareaAutosize } from "@mui/material";

import { ChangeEvent } from "react";

interface Props {
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  title: string;
  requirements: string;
  description: string;
}
const NewJobInputs = ({
  title,
  description,
  requirements,
  handleInputChange,
}: Props) => {
  const ariaLabel = { "aria-label": "description" };
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
        value={title}
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
        value={requirements}
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
        maxRows={5}
        maxLength={150}
        id="description"
        value={description}
        onChange={handleInputChange}
        required
        placeholder=" Roles are ..."
        className="max-h-[200px] min-h-[150px] px-3 py-1 w-full rounded-md bg-white overflow-hidden"
      />
    </>
  );
};

export default NewJobInputs;
