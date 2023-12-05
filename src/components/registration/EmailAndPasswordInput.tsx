import { useState, ChangeEvent } from "react";
import { Input, InputLabel, InputAdornment, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
interface Props {
  email: string;
  password: string;
  disabled: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: {
    "aria-label": string;
  };
}
const EmailAndPasswordInput = ({
  email,
  password,
  disabled,
  handleInputChange,
  ariaLabel,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <InputLabel
        htmlFor="email"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Email:
      </InputLabel>
      <Input
        id="email"
        type="email"
        autoComplete="off"
        value={email}
        disabled={disabled}
        onChange={handleInputChange}
        placeholder="example@email.com"
        required
        inputProps={ariaLabel}
        className="w-full px-3 py-2 overflow-hidden"
      />
      <InputLabel
        htmlFor="password"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Password:
      </InputLabel>
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        autoComplete="off"
        value={password}
        disabled={disabled}
        onChange={handleInputChange}
        placeholder="password"
        required
        inputProps={ariaLabel}
        className={`w-full px-3 py-2 overflow-hidden`}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export default EmailAndPasswordInput;
