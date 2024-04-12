import { Box, Paper, Typography } from "@mui/material";
import { User } from "firebase/auth";
import { useContext } from "react";
import AvatarProfile from "../components/Profile/AvatarProfile";
import ChangePassword from "../components/Profile/ChangePassword";
import DescriptionProfile from "../components/Profile/DescriptionProfile";
import NameProfile from "../components/Profile/NameProfile";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
console.log(currentUser?.photoURL)
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
