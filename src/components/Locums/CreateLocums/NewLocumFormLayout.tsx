import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControlButtons from "./ControlButtons";
import PageOne from "./PageOne";
import PageThree from "./PageThree";
import PageTwo from "./PageTwo";
import ProgressMonitor from "./ProgressMonitor";
import { Job, submitToFirebase } from "./hooks/useJobForm";

const NewLocumFormLayout = () => {
  const [job] = useState<Job>({
    title: "",
    requirements: "",
    description: "",
    location: "",
    rate: null,
    start: null,
    stop: null,
    completed: false,
  });
  const { location, rate, start, stop } = job;

  const [step, setStep] = useState<number>(1);

  const validSubmission =
    start !== null &&
    stop !== null &&
    location.length > 0 &&
    location.replace(/\s/g, "") !== "" &&
    rate !== null;
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validSubmission) {
      submitToFirebase(job);
      navigate("/dashboard");
    }
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          xs: "95%",
          md: "60%",
        },
        backgroundColor: "lightgray",
        px: 3,
        mt: 0,
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <ProgressMonitor step={step} />
        {step === 1 && <PageOne />}
        {step === 2 && <PageTwo />}
        {step === 3 && <PageThree />}
        <ControlButtons
          next={true}
          validSubmission={validSubmission}
          step={step}
          handleNextStep={() => {
            setStep(step + 1);
          }}
          handlePreviousStep={() => {
            setStep(step - 1);
          }}
        />
      </Box>
    </Paper>
  );
};

export default NewLocumFormLayout;
