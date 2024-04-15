import { ChangeEvent } from "react";
import { Input, InputLabel } from "@mui/material";

interface Props {
  name: string;
  disabled: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const NameRegistration = ({ name, disabled, handleInputChange }: Props) => {
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
        disabled={disabled}
        onChange={handleInputChange}
        placeholder="Organization's Name"
        required
        className="w-full px-3 py-2 overflow-hidden"
      />
    </>
  );
};

export default NameRegistration;
