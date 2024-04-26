import { Paper } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotificationElement from "../../NotificationElement";
import BackwardButton from "./ButonsFolder/BackwardButton";
import ControlButtons from "./ButonsFolder/ControlButtons";
import ForwardButton from "./ButonsFolder/ForwardButton";
import SubmissionButton from "./ButonsFolder/SubmissionButton";
import PageFour from "./PageFour/PageFour";
import PageOne from "./PageOne/PageOne";
import PageThree from "./PageThree/PageThree";
import PageTwo from "./PageTwo/PageTwo";
import ProgressMonitor from "./ProgressMonitor";
import useJobForm, {
  Job,
  PartOne,
  PartThree,
  PartTwo,
  StartStopTime,
  SubmittedLocum,
} from "./hooks/useJobForm";

interface PropTypes {
  update: boolean;
  existingJob: Job;
}
type Severity = "success" | "error";
type JobProps = PartOne | PartTwo | PartThree | StartStopTime;

const formStyling = {
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
};
const NewLocumFormLayout = ({ update, existingJob }: PropTypes) => {
  const { submitToFirebase, updateLocumDetails } = useJobForm();

  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<Severity>("success");
  const [message, setMessage] = useState<string | null>(null);
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

  const notifySuccess = () => {
    setSeverity("success");
    setMessage(
      `${
        update
          ? "Locum details updated successfully."
          : "New locum added successfully."
      }`
    );
  };
  const notifyError = () => {
    setSeverity("error");
    setMessage(
      `${
        update
          ? "Update of locum details unsuccessful."
          : "Addition of locum unsuccessful."
      }`
    );
  };
  const navigate = useNavigate();
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
        if (!update) {
          await submitToFirebase(jobFormat as SubmittedLocum);
          setTimeout(() => {
            navigate(`/dashboard/`);
          }, 2000);
        } else {
          await updateLocumDetails(id as string, jobFormat as SubmittedLocum);
          setTimeout(() => {
            navigate(`/dashboard/open-locums/${id}`);
          }, 2000);
        }
        notifySuccess();
      } catch (_error) {
        notifyError();
      } finally {
        setLoading(false);
        setOpen(true);
      }
    }
  };

  const updatingJobState = (name: JobProps) => {
    setJob({ ...job, ...name });
  };
  return (
    <>
      <NotificationElement
        handleClose={() => setOpen(false)}
        open={open}
        message={message as string}
        severity={severity}
      />
      <Paper
        elevation={3}
        sx={formStyling}
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
          <PageThree
            handlePartThree={updatingJobState}
            location={location}
            rate={rate}
          />
        )}
        {step === 4 && (
          <PageFour
            handlePartFour={updatingJobState}
            start={start}
            stop={stop}
          />
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
              loading={loading || open}
            />
          )}
        </ControlButtons>
      </Paper>
    </>
  );
};

export default NewLocumFormLayout;
