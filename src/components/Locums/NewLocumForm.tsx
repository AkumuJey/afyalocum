import {
  Box,
  Button,
  Paper,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

import TimeSelectionComponent from './TimeSelectionComponent'
import NewJobInputs from "./NewJobInputs";

const NewLocumForm = () => {
  const [job, setJob] = useState({
    title: '',
    requirements: '',
    description: '',
    start: null,
    stop: null
  })
  
  const handleInputChange = () => {};

  const today = dayjs()
  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          xs: "80%",
          md: "60%",
          marginLeft: "auto",
          marginRight: "auto",
        },
        backgroundColor: "lightgray",
        padding: 3,
      }}
    >
      <Box
        component="form"
        sx={{
          width: "100%",
        }}
      >
        <NewJobInputs handleInputChange={handleInputChange}/>
        <TimeSelectionComponent today={today}/>
        <Button variant="contained" type="submit">
          Save Vacancy
        </Button>
      </Box>
    </Paper>
  );
};

export default NewLocumForm;
