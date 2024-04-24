import { Box, Paper, Typography } from "@mui/material";
import { User } from "firebase/auth";
import { useContext, useState } from "react";
import Notification from "../components/NotificationElement";
import AvatarProfile from "../components/Profile/AvatarProfile";
import ChangePassword from "../components/Profile/ChangePassword";
import DescriptionProfile from "../components/Profile/DescriptionProfile";
import NameProfile from "../components/Profile/NameProfile";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";

type Severity = "success" | "error";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  document.title = (`${currentUser?.displayName} | AfyaLocum Profile`);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [severity, setSeverity] = useState<Severity>("success");
  const handleClose = () => {
    setSeverity("success");
    setOpen(false);
    setOpen(false);
  };

  const handleError = (msg: string) => {
    setMessage(msg);
    setOpen(true);
    setSeverity("error");
  };

  const handleSuccess = (msg: string) => {
    setMessage(msg);
    setOpen(true);
    setSeverity("success");
  };
  console.log(currentUser?.photoURL)
  return (
    <>
      <RouterAnimation>
        <ProtectedRoute>
          <Box
            component={`div`}
            className="w-[95%] mx-auto max-w-lg valid-height flex flex-col justify-start gap-[4rem] py-5"
          >
            <Notification
              open={open}
              handleClose={handleClose}
              message={message as string}
              severity={severity}
            />
            <Typography variant="h3" fontWeight={`bold`}>
              Profile
            </Typography>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <AvatarProfile
                currentUser={currentUser as User}
                handleSuccess={(msg) => handleSuccess(msg)}
                handleError={(msg) => handleError(msg)}
              />
              <NameProfile
                currentUser={currentUser as User}
                handleSuccess={(msg) => handleSuccess(msg)}
                handleError={(msg) => handleError(msg)}
              />
              <DescriptionProfile
                currentUser={currentUser as User}
                handleSuccess={(msg) => handleSuccess(msg)}
                handleError={(msg) => handleError(msg)}
              />
            </Paper>
            <ChangePassword />
          </Box>
        </ProtectedRoute>
      </RouterAnimation>
    </>
  );
};

export default Profile;
