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

  return (
    <>
      <motion.div className={`w-full flex p-2 ${step === 1 ? "justify-end" : "justify-between"}`}>
        {step !== 1 && (
          <BackwardButton handlePreviousStep={handlePreviousStep} />
        )}
        {step !== 3 && (
          <ForwardButton next={next} handleNextStep={handleNextStep} />
        )}
        {validSubmission && step === 3 && (
          <SubmissionButton validSubmission={validSubmission} />
        )}
      </motion.div>
    </>
  );
};

export default ControlButtons;
