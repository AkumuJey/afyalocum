import { Avatar, Button, Grid, PropTypes, Typography } from "@mui/material";
import { User } from "firebase/auth";
import useAuthStatus from "../../hooks/useAuthStatus";
interface PropTypes {
  enableEditing: () => void;
}
const ProfileAvatarDisplay = ({ enableEditing }: PropTypes) => {
  const currentUser: User | null = useAuthStatus();
  const { photoURL } = currentUser as User;

  return (
    <Grid
      container
      justifyContent={`space-between`}
      justifyItems={`center`}
      spacing={2}
    >
      <Grid item>
        <Typography fontWeight={`bold`}>Profile Photo: </Typography>
        <Avatar
          alt="Profile Image"
          src={photoURL as string}
          sx={{ width: "5rem", height: "5rem" }}
        />
      </Grid>
      <div className="flex justify-center items-center">
        <Button onClick={enableEditing} variant="contained">
          Edit
        </Button>
      </div>
    </Grid>
  );
};

export default ProfileAvatarDisplay;
