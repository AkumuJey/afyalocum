import { ChangeEvent } from "react";
import { Input, InputLabel } from "@mui/material";

interface Props {
  name: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: {
    "aria-label": string;
  };
}
const NameRegistration = ({ name, handleInputChange, ariaLabel }: Props) => {
  return (
    <>
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
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
        placeholder="Organization's Name"
        inputProps={ariaLabel}
        required
        className="w-full px-3 py-2 overflow-hidden"
      />
    </>
  );
};

export default NameRegistration;
