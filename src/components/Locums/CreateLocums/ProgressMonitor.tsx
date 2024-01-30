import { LinearProgress } from "@mui/material";
interface PropTypes {
  step: number;
}

const ProgressMonitor = ({ step }: PropTypes) => {
  return (
    <>
    <div>Step {step + "/" + 2}</div>
      <LinearProgress
        value={(step / 2) * 100}
        variant="determinate"
        sx={{ height: "0.5rem", borderRadius: "0.5rem", mb: "0.5rem" }}
      />
    </>
  );
};

export default ProgressMonitor;
