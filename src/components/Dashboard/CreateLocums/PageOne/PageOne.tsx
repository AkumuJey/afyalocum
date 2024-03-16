import {
  Input,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import useInputManagement from "../PageThree/useInputManagement";

interface PartOne {
  title: string;
  requirements: string;
}

interface PropTypes extends PartOne {
  handlePartOne: (partThree: PartOne) => void;
}

const PageOne = ({ title, requirements, handlePartOne }: PropTypes) => {
  const ariaLabel = { "aria-label": "description" };
  const professions = [
    "Doctor",
    "Pharmacist",
    "Dentist",
    "Nurse",
    "Laboratory Technologist",
    "Physiotherapist"
  ];

  const { handleInputChange, handleSelectChange } = useInputManagement()

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
        Select Job Title:
      </InputLabel>
      <Select
        sx={{ minWidth: "150px", m: 1 }}
        labelId="title"
        id="title"
        name="title"
        onChange={(e) => handleSelectChange(e, handlePartOne)}
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
        onChange={(e) => handleInputChange(e, handlePartOne)}
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
