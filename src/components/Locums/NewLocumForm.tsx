import { Box, Button, Paper } from "@mui/material";
import dayjs from "dayjs";
import { useState, ChangeEvent } from "react";

import TimeSelectionComponent from "./TimeSelectionComponent";
import NewJobInputs from "./NewJobInputs";

interface Job {
  title: "";
  requirements: "";
  description: "";
  location: "";
  rate: null | number;
  start: null | unknown;
  stop: null | unknown;
}
const NewLocumForm = () => {
  const [job, setJob] = useState<Job>({
    title: "",
    requirements: "",
    description: "",
    location: "",
    rate: null,
    start: null,
    stop: null,
  });
  const { title, requirements, description, location, rate, start, stop } = job;
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setJob({ ...job, [id]: value });
  };
  const handleDateChange = (newValue: unknown) => {
    console.log(newValue);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          xs: "95%",
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
        <NewJobInputs
          handleInputChange={handleInputChange}
          title={title}
          description={description}
          requirements={requirements}
          location={location}
          rate={rate}
        />
        <TimeSelectionComponent handleDateChange={handleDateChange} />
        <Button variant="contained" type="submit">
          Save Vacancy
        </Button>
      </Box>
    </Paper>
  );
};

export default NewLocumForm;
