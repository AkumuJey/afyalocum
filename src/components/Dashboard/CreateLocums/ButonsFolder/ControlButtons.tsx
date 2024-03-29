import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PropTypes {
  step: number;
  children: ReactNode
}
const ControlButtons = ({
  step,
  children
}: PropTypes) => {

  return (
    <>
      <motion.div className={`w-full flex p-2 ${step === 1 ? "justify-end" : "justify-between"}`}>
        {children}
      </motion.div>
    </>
  );
};

export default ControlButtons;
