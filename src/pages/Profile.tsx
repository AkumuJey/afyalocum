import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import UserAvatar from "../components/Navbar/UserAvatar";
import NameProfile from "../components/Profile/NameProfile"
import DescriptionProfile from "../components/Profile/DescriptionProfile";

const Profile = () => {
  return (
    <>
      <Box
        component={`div`}
        className="w-[95%] max-w-lg valid-height flex flex-col justify-start gap-[4rem] py-5"
      >
        <Typography variant="h3">Profile</Typography>
        <Paper elevation={2} sx={{ padding: 2, }}>
          <Grid container justifyContent={`space-between`}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <UserAvatar />
            </Grid>
            <Button sx={{ height: "auto" }}>Edit</Button>
          </Grid>
          <NameProfile />
          <DescriptionProfile />
        </Paper>
      </Box>
    </>
  );
};

export default Profile;
