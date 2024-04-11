import { Box, Paper, Typography } from "@mui/material";
import NameProfile from "../components/Profile/NameProfile";
import DescriptionProfile from "../components/Profile/DescriptionProfile";
import AvatarProfile from "../components/Profile/AvatarProfile";
import ChangePassword from "../components/Profile/ChangePassword";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import RouterAnimation from "./RouterAnimation";
import { updateProfile, User } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <RouterAnimation>
        <ProtectedRoute>
          <Box
            component={`div`}
            className="w-[95%] max-w-lg valid-height flex flex-col justify-start gap-[4rem] py-5"
          >
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
              <AvatarProfile currentUser={currentUser as User} />
              <NameProfile currentUser={currentUser as User} />
              <DescriptionProfile currentUser={currentUser as User}/>
            </Paper>
            <ChangePassword />
          </Box>
        </ProtectedRoute>
      </RouterAnimation>
    </>
  );
};

export default Profile;
