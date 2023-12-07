import {
  Grid,
  Typography,
  Button,
  Input,
  Box,
  InputLabel,
} from "@mui/material";
import { useState, FormEvent } from "react";
interface Props{
  displayName: string
}
const Name = ({displayName} : Props) => {
  // State to manage the editable status of the component
  const [isEditable, setIsEditable] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setIsEditable(false);
    console.log(data);
  };

  // Render the component based on the editable status
  return (
    <>
      {/* If the component is not editable, display the name and an edit button */}
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

      {/* If the component is editable, display a form to edit the name */}
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
            <Button type="submit" color="primary" variant="contained">
              Save
            </Button>
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
