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
  const { title, requirements, description, location, rate, start, stop } = job;

  const [step, setStep] = useState<number>(1);

  const validSubmission =
    start !== null &&
    stop !== null &&
    location.length > 0 &&
    location.replace(/\s/g, "") !== "" &&
    rate !== null;
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validSubmission) {
      try {
        const jobFormat = {};
        Object.assign(jobFormat, {
          ...job,
          start: start.toString(),
          stop: stop.toString(),
        });
        console.log(jobFormat);
        await submitToFirebase(jobFormat);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const trial = (name: unknown) => {
    setJob({ ...job, ...name });
    console.log(job, "trial");
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
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      component={`form`}
      onSubmit={handleSubmit}
    >
      <ProgressMonitor step={step} />
      {step === 1 && (
        <PageOne
          handlePartOne={trial}
          requirements={requirements}
          title={title}
        />
      )}
      {step === 2 && (
        <PageTwo handlePartTwo={trial} description={description} />
      )}
      {step === 3 && (
        <PageThree handlePartThree={trial} location={location} rate={rate} />
      )}
      {step === 4 && (
        <PageFour handlePartFour={trial} start={start} stop={stop} />
      )}
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
