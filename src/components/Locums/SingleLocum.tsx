
import { Box, IconButton, Paper } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


interface Props {
    onClose: () => void;
}
const SingleLocum = ({onClose} : Props) => {
  return (
    <>
      <Paper elevation={3}>
        <Box component={`div`}>
            <IconButton onClick={onClose}><ArrowBackIosIcon /> Back</IconButton>
        </Box>
      </Paper>
    </>
  );
};

export default SingleLocum;
