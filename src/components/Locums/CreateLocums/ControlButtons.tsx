import { motion } from "framer-motion";
import ForwardButton from "./ForwardButton";
import BackwardButton from "./BackwardButton";
import SubmissionButton from "./SubmissionButton";

interface PropTypes {
  step: number;
  validSubmission: boolean;
  next: boolean;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}
const ControlButtons = ({
  step,
  next,
  validSubmission,
  handleNextStep,
  handlePreviousStep,
}: PropTypes) => {
  const justifyDirection = validSubmission
    ? "between"
    : step === 1 && validSubmission || step === 1
    ? "end"
    : "start";
  return (
    <>
      <motion.div className={`w-full flex justify-${justifyDirection} p-2`}>
        {step === 1 && (
          <ForwardButton next={next} handleNextStep={handleNextStep} />
        )}
        {step !== 1 && (
          <BackwardButton handlePreviousStep={handlePreviousStep} />
        )}
        {validSubmission && step === 2 && (
          <SubmissionButton validSubmission={validSubmission} />
        )}
      </motion.div>
    </>
  );
};

export default ControlButtons;
