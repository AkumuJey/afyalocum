import React, { FormEvent, useState } from "react";

import IconButton from "@mui/material/IconButton";

import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { AuthCredential, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import NotificationElement from "./Notification";

interface ShowPassword {
  showCurrentPassword: boolean;
  showNewPassword: boolean;
}

type Severity = "success" | "error";

const ChangePassword = () => {
  const [show, setShow] = useState<ShowPassword>({
    showCurrentPassword: false,
    showNewPassword: false,
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState<Severity>("success")
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const emptyPassword =  oldPassword.trim().length < 8 || newPassword.trim().length < 8;
  const clearPasswords = () => {
    setNewPassword("")
    setOldPassword('')
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    try {
      e.preventDefault();
      const user = auth.currentUser;
      if (user) {
        const credential: AuthCredential = EmailAuthProvider.credential(user.email as string, oldPassword)
        await reauthenticateWithCredential(user, credential)
        await updatePassword(user, newPassword)
        setSeverity("success")
        setMessage("Password updated successfuly")
        clearPasswords()
      }
    } catch (error) {
      setSeverity("error")
      setMessage(error.message)
    }finally{
      setLoading(false)
      setOpen(true)
    }
  };

  return (
    <>
    <NotificationElement open={open} handleClose={() => setOpen(false)} message={message} severity={severity}/>
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
            disabled={loading}
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
            disabled={loading}
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
          <Box component={`div`} sx={{ m: 1, maxWidth: "40ch", width: "100%" }}>
            <LoadingButton
              type="submit"
              variant="contained"
              color="secondary"
              loading={loading}
              disabled={loading || emptyPassword}
            >
              Save new password
            </LoadingButton>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ChangePassword;
