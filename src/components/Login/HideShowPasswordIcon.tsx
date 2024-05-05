import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

interface PropTypes {
    showPassword: boolean;
    toggleShowPassword: () => void
  }
  
const HideShowPasswordIcon = ({showPassword, toggleShowPassword} : PropTypes) => {
  return (
    <><InputAdornment position="end">
    <IconButton onClick={toggleShowPassword} edge="end">
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  </InputAdornment></>
  )
}

export default HideShowPasswordIcon