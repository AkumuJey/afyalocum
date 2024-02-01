import { Paper } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ControlButtons from "./ButonsFolder/ControlButtons";
import PageFour from "./PageFour/PageFour";
import PageOne from "./PageOne/PageOne";
import PageThree from "./PageThree/PageThree";
import PageTwo from "./PageTwo/PageTwo";
import ProgressMonitor from "./ProgressMonitor";
import { Job, submitToFirebase } from "./hooks/useJobForm";

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
  const {  location, rate, start, stop } = job;

  const [step, setStep] = useState<number>(1);

  const validSubmission =
    start !== null &&
    stop !== null &&
    location.length > 0 &&
    location.replace(/\s/g, "") !== "" &&
    rate !== null;
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validSubmission) {
      submitToFirebase(job);
      navigate("/dashboard");
    }
  };

  const trial = (name: unknown) => {
    setJob({...job, ...name})
    console.log(job)
  }
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
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      component={`form`}
      onSubmit={handleSubmit}
    >
      <ProgressMonitor step={step} />
      {step === 1 && <PageOne />}
      {step === 2 && <PageTwo />}
      {step === 3 && <PageThree handlePartThree={trial}/>}
      {step === 4 && <PageFour />}
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
    </Paper>
  );
};

export default NewLocumFormLayout;
