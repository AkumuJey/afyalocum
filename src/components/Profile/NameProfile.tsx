import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { User } from "firebase/auth";
import { FormEvent, useState } from "react";
import useProfileUpdate from "../../hooks/useProfileUpdate";
interface PropTypes {
  currentUser: User;
}
const Name = ({ currentUser }: PropTypes) => {
  const { updateUserName, handleSuccess, handleError } = useProfileUpdate()
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const { name } = data;
      await updateUserName(name as string);
      handleSuccess("Hospital name updated successfully");
    } catch (_error) {
      handleError("Error updating name");
    } finally {
      setLoading(false);
      setIsEditable(false);
    }
  };

  const { displayName } = currentUser;

  return (
    <>
      {!isEditable && (
        <Grid container justifyContent={`space-between`} spacing={2}>
          <Grid item>
            <Typography fontWeight={`bold`}>Name: </Typography>
            <Typography>{displayName}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => setIsEditable(true)} variant="contained">
              Edit
            </Button>
          </Grid>
        </Grid>
      )}
      {isEditable && (
        <Box
          component={`form`}
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <Box component={`div`} sx={{ width: "100%" }}>
            <InputLabel
              htmlFor="name"
              sx={{
                fontWeight: "bold",
                color: "black",
                width: "100%",
                textAlign: "left",
              }}
            >
              Name
            </InputLabel>
            <Input
              id="name"
              name="name"
              defaultValue={displayName}
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box
            component={`div`}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
              width: "100%",
            }}
          >
            <LoadingButton
              type="submit"
              variant="contained"
              color="secondary"
              loading={loading}
              disabled={loading}
            >
              Update Description
            </LoadingButton>
            <Button
              type="button"
              color="secondary"
              onClick={() => setIsEditable(false)}
              variant="outlined"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Name;
//
//In this code, we have a `Name` component that displays a user's name. When the "Edit" button is clicked, the component becomes editable, allowing the user to change their name. The changes are then saved using the "Save" button. The "Cancel" button reverts the component to its non-editable state..</s>
