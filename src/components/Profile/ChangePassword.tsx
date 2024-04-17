import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Typography, Paper, Button } from "@mui/material";
import { auth } from "../../firebase/firebase";
import { AuthCredential, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";

interface ShowPassword {
  showCurrentPassword: boolean;
  showNewPassword: boolean;
  showConfrimNewPassword: boolean;
}

const ChangePassword = () => {
  const [show, setShow] = useState<ShowPassword>({
    showCurrentPassword: false,
    showNewPassword: false,
    showConfrimNewPassword: false,
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user = auth.currentUser;
      if (user) {
        const credential: AuthCredential = EmailAuthProvider.credential(user.email as string, oldPassword)
        await reauthenticateWithCredential(user, credential)
        await updatePassword(user, newPassword)
        console.log("Success")
      }
    } catch (error) {
      console.log("Failed: ", error);
    }
  };

  return (
    <>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box
          component={`form`}
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <Typography
            variant="h5"
            sx={{ m: 1, alignSelf: "start" }}
            fontWeight={`bold`}
            textAlign={`left`}
          >
            Change password:
          </Typography>
          <FormControl
            sx={{ m: 1, maxWidth: "50ch", width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="current-password">Current password</InputLabel>
            <OutlinedInput
              id="current-password"
              name="current-password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              type={show.showCurrentPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setShow({
                        ...show,
                        showCurrentPassword: !show.showCurrentPassword,
                      })
                    }
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {show.showCurrentPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Current password"
            />
          </FormControl>
          <FormControl
            sx={{ m: 1, maxWidth: "50ch", width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="new-password">New password</InputLabel>
            <OutlinedInput
              id="new-password"
              name="new-password"
              type={show.showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setShow({
                        ...show,
                        showNewPassword: !show.showNewPassword,
                      })
                    }
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {show.showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="New password"
            />
          </FormControl>
          <FormControl
            sx={{ m: 1, maxWidth: "50ch", width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="confirm-new-password">
              Confrim new password
            </InputLabel>
            <OutlinedInput
              id="confirm-new-password"
              name="confirm-new-password"
              type={show.showConfrimNewPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setShow({
                        ...show,
                        showConfrimNewPassword: !show.showConfrimNewPassword,
                      })
                    }
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {show.showConfrimNewPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confrim new password"
            />
          </FormControl>
          <Box component={`div`} sx={{ m: 1, maxWidth: "40ch", width: "100%" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "success.main",
                color: "white",
                "&:hover": {
                  bgcolor: "success.dark",
                },
              }}
            >
              Save new password
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ChangePassword;
