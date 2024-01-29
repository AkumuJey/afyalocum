import { Button } from "@mui/material";

import { motion } from "framer-motion";
import ForwardButton from "./ForwardButton";

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
  
  const justifyDirection = validSubmission ? "between" : (step === 1 ? "end" : "start")
  return (
    <>
      <motion.div className={`w-full bg-black flex justify-${justifyDirection} p-2`}>
        {step === 1 && <ForwardButton next={next} handleNextStep={handleNextStep}/>}
        {step === 2 && (
          <>
            <Button
              variant="contained"
              type="button"
              onClick={handlePreviousStep}
            >
              Back
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={!validSubmission}
            >
              Save Vacancy
            </Button>
          </>
        )}
      </motion.div>
    </>
  );
};

export default ControlButtons;
