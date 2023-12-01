import { Box, Button, Paper, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface Props {
  onClose: () => void;
}
const SingleLocum = ({ onClose }: Props) => {
  return (
    <>
      <Paper elevation={3} sx={{ display: "relative", padding: "1rem" }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={onClose}
          sx={{ top: "0.2rem", left: "0.2rem" }}
        >
          Back
        </Button>
        <Box component={`div`}>
          <Typography variant="h6">Person X</Typography>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            temporibus quis omnis illum, illo est, cupiditate cum, excepturi
            quidem dolore eveniet aspernatur similique dignissimos iure. Natus
            quasi quod eos facilis?
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default SingleLocum;
