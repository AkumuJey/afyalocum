import PlaceIcon from "@mui/icons-material/Place";
import { Input, InputLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface PartTwo {
  location: string;
  rate: number | null;
}
const ariaLabel = { "aria-label": "description" };
const PageThree = () => {
  const [partTwo, setPartTwo] = useState<PartTwo>({ location: "", rate: null });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setPartTwo({ ...partTwo, [id]: value });
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
        value={partTwo.location}
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
        defaultValue={partTwo.rate}
        type="number"
        onChange={handleInputChange}
        inputProps={{ min: 0, ...ariaLabel }}
        required
        className="w-full rounded-md overflow-hidden"
      />
    </>
  );
};

export default PageThree;
