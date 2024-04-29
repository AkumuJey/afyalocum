import { Box, Paper, Typography } from "@mui/material";
import ProtectedRoutes from "@components/ProtectedRoute";
import NotificationElement from "@components/NotificationElement";
import AvatarProfile from "@components/Profile/AvatarProfile";
import NameProfile from "@components/Profile/NameProfile";
import DescriptionProfile from "@components/Profile/DescriptionProfile";
import ChangePassword from "@components/Profile/ChangePassword";

import { User } from "firebase/auth";
import useProfileUpdate from "../hooks/useProfileUpdate";
import RouterAnimation from "./RouterAnimation";
import useAuthStatus from "../hooks/useAuthStatus";

const Profile = () => {
  const currentUser: User | null = useAuthStatus();
  document.title = `${currentUser?.displayName} | AfyaLocum Profile`;
  const { open, message, severity, handleClose, handleSuccess, handleError } =
    useProfileUpdate();
  return (
    <>
      <RouterAnimation>
        <ProtectedRoutes>
          <Box
            component={`div`}
            className="w-[95%] mx-auto max-w-lg valid-height flex flex-col justify-start gap-[4rem] py-5"
          >
            <NotificationElement
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
                handleError={handleError}
                handleSuccess={handleSuccess}
              />
              <NameProfile
                handleError={handleError}
                handleSuccess={handleSuccess}
              />
              <DescriptionProfile
                handleError={handleError}
                handleSuccess={handleSuccess}
              />
            </Paper>
            <ChangePassword />
          </Box>
        </ProtectedRoutes>
      </RouterAnimation>
    </>
  );
};

export default Profile;
