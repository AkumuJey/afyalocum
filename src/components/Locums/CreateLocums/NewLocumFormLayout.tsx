import { Box, Paper } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ControlButtons from "./ControlButtons";
import PageOne from "./PageOne";
import PageThree from "./PageThree";
import PageTwo from "./PageTwo";
import ProgressMonitor from "./ProgressMonitor";

interface Job {
  title: string;
  requirements: string;
  description: string;
  location: string;
  rate: null | number;
  start: null | Date;
  stop: null | Date;
  completed: boolean;
}
const NewLocumFormLayout = () => {
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
      navigate("/dashboard");
    }
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          xs: "95%",
          md: "70%",
        },
        backgroundColor: "lightgray",
        px: 3,
        mt: 0
      }}
    >
      <Box
        component="form"
        sx={{
          width: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <ProgressMonitor step={step} />
        {step === 1 && (
          <PageOne
            handleInputChange={handleInputChange}
            title={title}
            description={description}
            requirements={requirements}
          />
        )}
        {step === 2 && (
          <PageTwo handleInputChange={handleInputChange} location={location} rate={rate}/>
        )}
        {step === 3 && <PageThree handleDateTimeChange={handleDateTimeChange} start={start} stop={stop} minDateTime={minDateTime}/>}
        <ControlButtons
          next={next}
          validSubmission={validSubmission}
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      </Box>
    </Paper>
  );
};

export default NewLocumFormLayout;
