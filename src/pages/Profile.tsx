import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import UserAvatar from "../components/Navbar/UserAvatar";

const Profile = () => {
  return (
    <>
      <Box
        component={`div`}
        className="w-[95%] md:w-[50%] valid-height flex flex-col justify-start text-center gap-[4rem] py-5"
      >
        <Typography variant="h3">Profile</Typography>
        <Paper elevation={2} sx={{ padding: 2 }}>
          <Grid container justifyContent={`space-between`}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <UserAvatar />
            </Grid>
            <Button sx={{ height: "auto" }}>Edit</Button>
          </Grid>
          <Grid container justifyContent={`space-between`}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography>Name: </Typography>
            </Grid>
            <Button>Edit</Button>
          </Grid>
          <Grid container justifyContent={`space-between`}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography>Description: </Typography>
            </Grid>
            <Button>Edit</Button>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Profile;
