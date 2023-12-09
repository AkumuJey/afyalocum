import { Box, Paper, Typography } from "@mui/material";
import NameProfile from "../components/Profile/NameProfile"
import DescriptionProfile from "../components/Profile/DescriptionProfile";
import AvatarProfile from "../components/Profile/AvatarProfile";
import ChangePassword from "../components/Profile/ChangePassword";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const Profile = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
    <ProtectedRoute>
    <Box
        component={`div`}
        className="w-[95%] max-w-lg valid-height flex flex-col justify-start gap-[4rem] py-5"
      >
        <Typography variant="h3" fontWeight={`bold`}>Profile</Typography>
        <Paper elevation={3} sx={{ padding: 2, display: "flex", flexDirection: "column", gap: "2rem"}}>
          <AvatarProfile imageUrl={currentUser?.photoURL as string}/>
          <NameProfile displayName={currentUser?.displayName as string}/>
          <DescriptionProfile />
        </Paper>
        <ChangePassword />
      </Box>
    </ProtectedRoute>
      
    </>
  );
};

export default Profile;
