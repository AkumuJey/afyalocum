import { Paper } from "@mui/material";
import { FormEvent, useState } from "react";
import BackwardButton from "./ButonsFolder/BackwardButton";
import ControlButtons from "./ButonsFolder/ControlButtons";
import ForwardButton from "./ButonsFolder/ForwardButton";
import SubmissionButton from "./ButonsFolder/SubmissionButton";
import PageFour from "./PageFour/PageFour";
import PageOne from "./PageOne/PageOne";
import PageThree from "./PageThree/PageThree";
import PageTwo from "./PageTwo/PageTwo";
import ProgressMonitor from "./ProgressMonitor";
import { Job, PartOne, PartThree, PartTwo, StartStopTime, SubmittedLocum, submitToFirebase } from "./hooks/useJobForm";

interface PropTypes {
  handleUpdate?: (updatedLocum : SubmittedLocum) => void;
  existingJob: Job;
}

const NewLocumFormLayout = ({ handleUpdate,existingJob }: PropTypes) => {
  const [job, setJob] = useState<Job>(existingJob);
  const [loading, setLoading] = useState(false);
  const { title, requirements, description, location, rate, start, stop } = job;

  const [step, setStep] = useState<number>(1);
  const validSubmission =
    start !== null &&
    stop !== null &&
    location.length > 0 &&
    location.replace(/\s/g, "") !== "" &&
    rate !== null;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (validSubmission) {
      try {
        const jobFormat = {};
        Object.assign(jobFormat, {
          ...job,
          start: start.toString(),
          stop: stop.toString(),
        });
        if(!handleUpdate){
          await submitToFirebase(jobFormat as SubmittedLocum);
        } else{
          handleUpdate(jobFormat as SubmittedLocum)
        }
      } catch (_error) {
        throw new Error("Failed to update");
      } finally {
        setLoading(false);
      }
    }
  };

  type JobProps = PartOne | PartTwo | PartThree | StartStopTime;
  const updatingJobState = (name: JobProps) => {
    setJob({ ...job, ...name });
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
          handlePartOne={updatingJobState}
          requirements={requirements}
          title={title}
        />
      )}
      {step === 2 && (
        <PageTwo handlePartTwo={updatingJobState} description={description} />
      )}
      {step === 3 && (
        <PageThree handlePartThree={updatingJobState} location={location} rate={rate} />
      )}
      {step === 4 && (
        <PageFour handlePartFour={updatingJobState} start={start} stop={stop} />
      )}
      <ControlButtons step={step}>
        {step !== 1 && (
          <BackwardButton
            handlePreviousStep={() => {
              setStep(step - 1);
            }}
          />
        )}
        {step !== 4 && (
          <ForwardButton
            next={true}
            handleNextStep={() => {
              setStep(step + 1);
            }}
          />
        )}
        {validSubmission && step === 4 && (
          <SubmissionButton
            validSubmission={validSubmission}
            loading={loading}
          />
        )}
      </ControlButtons>
    </Paper>
  );
};

export default NewLocumFormLayout;
