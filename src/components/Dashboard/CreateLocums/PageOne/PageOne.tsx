import { Input, InputLabel } from "@mui/material";
import { ChangeEvent } from "react";

interface PartOne {
  title: string;
  requirements: string;
}

interface PropTypes extends PartOne {
  handlePartOne: (partThree: PartOne) => void;
}

const PageOne = ({ title, requirements, handlePartOne }: PropTypes) => {
  const ariaLabel = { "aria-label": "description" };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let goal = { [id]: value };
    handlePartOne(goal);
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
        value={title}
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
