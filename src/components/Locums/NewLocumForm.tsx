import { Box, Button, Paper, Grid, LinearProgress } from "@mui/material";
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
  const { title, requirements, description, location, rate } = job;
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setJob({ ...job, [id]: value });
  };
  const handleDateChange = (newValue: unknown) => {
    const start = newValue;
    const stop = newValue;
    setJob({ ...job, start, stop });
    console.log(job);
  };

  const [step, setStep] = useState<number>(2);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviousStep = () => {
    setStep(step - 1);
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
        <LinearProgress
          value={(step / 2) * 100}
          variant="determinate"
          sx={{ height: "0.5rem", borderRadius: "0.5rem", mb: '1rem',  }}
        />
        {step === 1 && (
          <NewJobInputs
            handleInputChange={handleInputChange}
            title={title}
            description={description}
            requirements={requirements}
          />
        )}
        {step === 2 && (
          <TimeSelectionComponent
            handleDateChange={handleDateChange}
            handleInputChange={handleInputChange}
            location={location}
            rate={rate}
          />
        )}
        {step === 1 && (
          <Grid container justifyContent={`end`} px={4}>
            <Grid item>
              <Button variant="contained" onClick={handleNextStep}>
                Next
              </Button>
            </Grid>
          </Grid>
        )}

        {step === 2 && (
          <Grid container justifyContent={`space-between`} px={4}>
            <Grid item>
              <Button
                variant="contained"
                type="button"
                onClick={handlePreviousStep}
              >
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                Save Vacancy
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
    </Paper>
  );
};

export default NewLocumForm;
