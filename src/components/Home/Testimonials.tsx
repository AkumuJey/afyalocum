import { Box, Paper, Typography } from "@mui/material";

interface testimony {
  title: string;
  body: string;
  id: number;
}
interface Props {
  testimony: testimony;
}

const Testimonials = ({ testimony }: Props) => {
  return (
    <>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography component={`h4`} fontWeight={`bold`}>{testimony.title}</Typography>
          <Typography component={`p`}>{testimony.body}</Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Testimonials;
