import { LinearProgress, Typography } from "@mui/material";
interface PropTypes {
  step: number;
}

const ProgressMonitor = ({ step }: PropTypes) => {
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
    <Typography variant="body1" gutterBottom>
        Step {step} / 3
      </Typography>
      <LinearProgress
        value={(step / 3) * 100}
        variant="determinate"
        sx={{ height: "0.5rem", borderRadius: "0.5rem", mb: "0.5rem" }}
      />
      </div>
    </>
  );
};

export default ProgressMonitor;
