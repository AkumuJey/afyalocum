import {
  Alert,
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  Slide,
  SlideProps,
  Snackbar
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";
import NewJobInputs from "../components/Locums/NewJobInputs";
import TimeSelectionComponent from "../components/Locums/TimeSelectionComponent";

interface Job {
  title: "";
  requirements: "";
  description: "";
  location: "";
  rate: null | number;
  start: null | Date;
  stop: null | Date;
  completed: boolean;
}
const CreateNew = () => {
  const [job, setJob] = useState<Job>({
    title: "",
    requirements: "",
    description: "",
    location: "",
    rate: null,
    start: null,
    stop: null,
    completed: false,
  });
  const { title, requirements, description, location, rate, start, stop } = job;
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setJob({ ...job, [id]: value });
  };

  const [step, setStep] = useState<number>(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  const next =
    title.length > 0 &&
    title.replace(/\s/g, "") !== "" &&
    requirements.length > 0 &&
    requirements.replace(/\s/g, "") !== "" &&
    description.length > 0 &&
    description.replace(/\s/g, "") !== "";

  const validSubmission =
    next &&
    start !== null &&
    stop !== null &&
    location.length > 0 &&
    location.replace(/\s/g, "") !== "" &&
    rate !== null;

  const handleDateTimeChange = (newValue: unknown | Dayjs, type: string) => {
    if (dayjs.isDayjs(newValue)) {
      const value = newValue.toDate();
      setJob({ ...job, [type]: value });
      if (type === "start") {
        setMinDateTime(newValue.add(1, "hour"));
      }
    }
    console.log(job);
  };

  const [minDateTime, setMinDateTime] = useState<Dayjs>(dayjs().add(1, "hour"));
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validSubmission) {
      console.log(job);
      setSuccess(true);
      navigate("/locums");
    }
  };
  // window. location. reload()
  const [success, setSuccess] = useState<boolean>(false);

  type TransitionProps = Omit<SlideProps, "direction">;
  function transitionTop(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
  }

  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleChange = () => {
    if(transition) {
      setTransition(undefined);
      setSuccess(false)
    }else{
      setTransition(transitionTop)
      setSuccess(true)
    }
  }
  return (
    <>
      <Button onClick={handleChange}>Open</Button>
      <Snackbar
        autoHideDuration={3000}
        open={success}
        onClose={() => setSuccess(false)}
        TransitionComponent={transitionTop}
        transitionDuration={500}
      >
        <Alert variant="filled" severity="success" sx={{width: "100%"}}>
          Locum listed Successlly
        </Alert>
      </Snackbar>
      <Paper
        elevation={3}
        sx={{
          width: {
            xs: "95%",
            md: "70%",
          },
          backgroundColor: "lightgray",
          px: 3,
          py: "1rem",
        }}
      >
        <Box
          component="form"
          sx={{
            width: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <LinearProgress
            value={(step / 2) * 100}
            variant="determinate"
            sx={{ height: "0.5rem", borderRadius: "0.5rem", mb: "0.5rem" }}
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
              handleDateTimeChange={handleDateTimeChange}
              handleInputChange={handleInputChange}
              minDateTime={minDateTime}
              location={location}
              rate={rate}
              start={start}
              stop={stop}
            />
          )}
          {step === 1 && (
            <Grid container justifyContent={`end`} px={3}>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={handleNextStep}
                  disabled={!next}
                >
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
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!validSubmission}
                >
                  Save Vacancy
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default CreateNew;
