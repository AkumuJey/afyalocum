import { motion } from "framer-motion";
import ForwardButton from "./ForwardButton";
import BackwardButton from "./BackwardButton";
import SubmissionButton from "./SubmissionButton";

interface PropTypes {
  loading: boolean;
  step: number;
  validSubmission: boolean;
  next: boolean;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}
const ControlButtons = ({
  loading,
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
        {step !== 4 && (
          <ForwardButton next={next} handleNextStep={handleNextStep} />
        )}
        {validSubmission && step === 4 && (
          <SubmissionButton validSubmission={validSubmission} loading={loading}/>
        )}
      </motion.div>
    </>
  );
};

export default ControlButtons;
