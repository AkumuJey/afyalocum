
import {
  Box,
  Button,
  Paper,
} from "@mui/material";
import dayjs from "dayjs";
import { useState, ChangeEvent } from "react";

import TimeSelectionComponent from './TimeSelectionComponent'
import NewJobInputs from "./NewJobInputs";

interface Job{
  title: '',
  requirements: '',
  description: '',
  start: null | dayjs.Dayjs,
  stop: null | dayjs.Dayjs
}
const NewLocumForm = () => {
  const [job, setJob] = useState<Job>({
    title: '',
    requirements: '',
    description: '',
    start: null,
    stop: null
  })
  const { title, requirements, description, start, stop } = job;
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setJob({ ...job, [id]: value });
  };
  const handleDateChange = () => {}

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
        <NewJobInputs handleInputChange={handleInputChange} title={title} description={description} requirements={requirements}/>
        <TimeSelectionComponent today={today} handleDateChange={handleDateChange}/>
        <Button variant="contained" type="submit">
          Save Vacancy
        </Button>
      </Box>
    </Paper>
  );
};

export default NewLocumForm;
