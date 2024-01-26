import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

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
    <motion.div className="w-fit">
      <Paper elevation={3} sx={{width: '100%', maxWidth: 350}}>
        <Box p={2}>
          <Typography component={`h4`} fontWeight={`bold`}>{testimony.title}</Typography>
          <Typography component={`p`}>{testimony.body}</Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Testimonials;
