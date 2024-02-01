import PlaceIcon from "@mui/icons-material/Place";
import { Input, InputLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface PropTypes {
  handlePartThree: (partThree: PartThree) => void
}

interface PartThree {
  location: string;
  rate: number | null;
}
const ariaLabel = { "aria-label": "description" };
const PageThree = ({handlePartThree} : PropTypes) => {
  const [partThree, setPartThree] = useState<PartThree>({ location: "", rate: null });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setPartThree({ ...partThree, [id]: value });
    console.log(partThree)
    handlePartThree({[id]: value})
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
        value={partThree.location}
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
        defaultValue={partThree.rate}
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
