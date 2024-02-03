import { Input, InputLabel } from "@mui/material";
import { useState } from "react";
import HideShowPasswordIcon from "./HideShowPasswordIcon";
interface PropTypes {
  loading: boolean;
}

const PasswordInput = ({ loading }: PropTypes) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <InputLabel
        htmlFor="password"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Password
      </InputLabel>
      <Input
        id="password"
        name="password"
        autoComplete="off"
        required
        disabled={loading}
        type={showPassword ? "text" : "password"}
        sx={{
          width: "100%",
          backgroundColor: "white",
          px: "0.5rem",
          py: "0.2rem",
        }}
        endAdornment={
          <HideShowPasswordIcon showPassword={showPassword} toggleShowPassword={toggleShowPassword}/>
        }
      />
    </>
  );
};

export default PasswordInput;
