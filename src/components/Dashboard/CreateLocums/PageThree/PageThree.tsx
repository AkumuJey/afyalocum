import PlaceIcon from "@mui/icons-material/Place";
import { Input, InputLabel } from "@mui/material";
import { ChangeEvent } from "react";

interface PartThree {
  location: string;
  rate: number | null;
}
interface PropTypes extends PartThree {
  handlePartThree: (partThree: PartThree) => void;
}

const ariaLabel = { "aria-label": "description" };
const PageThree = ({ location, rate, handlePartThree }: PropTypes) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let goal = { [name]: value };
    handlePartThree(goal);
  };
  return (
    <>
      <InputLabel
        htmlFor="location"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        <PlaceIcon /> Location:
      </InputLabel>
      <Input
        id="location"
        name="location"
        value={location}
        onChange={handleInputChange}
        placeholder="e.g. Westlands Nairobi"
        inputProps={ariaLabel}
        required
        className="w-full px-3 rounded-md overflow-hidden"
      />
      <InputLabel
        htmlFor="rate"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Hourly Rate (KSh):
      </InputLabel>
      <Input
        id="rate"
        name="rate"
        defaultValue={rate}
        type="number"
        onChange={handleInputChange}
        inputProps={{ min: 0, ...ariaLabel }}
        required
        className="w-full overflow-hidden"
      />
    </>
  );
};

export default PageThree;
