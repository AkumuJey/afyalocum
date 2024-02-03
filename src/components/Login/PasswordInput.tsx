import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
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
          <InputAdornment position="end">
            <IconButton onClick={toggleShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export default PasswordInput;
