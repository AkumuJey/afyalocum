import { Box, Paper, Typography } from "@mui/material";
import { User } from "firebase/auth";
import Notification from "../components/NotificationElement";
import AvatarProfile from "../components/Profile/AvatarProfile";
import ChangePassword from "../components/Profile/ChangePassword";
import DescriptionProfile from "../components/Profile/DescriptionProfile";
import NameProfile from "../components/Profile/NameProfile";
import ProtectedRoute from "../components/ProtectedRoute";
import useProfileUpdate from "../hooks/useProfileUpdate";
import RouterAnimation from "./RouterAnimation";
import useAuthStatus from "../hooks/useAuthStatus";

const Profile = () => {
  const currentUser: User | null = useAuthStatus();
  document.title = `${currentUser?.displayName} | AfyaLocum Profile`;
  const { open, message, severity, handleClose } = useProfileUpdate();
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
              <AvatarProfile />
              <NameProfile currentUser={currentUser as User} />
              <DescriptionProfile currentUser={currentUser as User} />
            </Paper>
            <ChangePassword />
          </Box>
        </ProtectedRoute>
      </RouterAnimation>
    </>
  );
};

export default Profile;
