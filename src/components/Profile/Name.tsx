import { Grid, Typography, Button } from "@mui/material";
import { useState } from "react";

const Name = () => {
  const [isEditable, setIsEditable] = useState();
  return (
    <>
      <Grid container justifyContent={`space-between`}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography>Name: </Typography>
        </Grid>
        <Button>Edit</Button>
      </Grid>
    </>
  );
};

export default Name;
