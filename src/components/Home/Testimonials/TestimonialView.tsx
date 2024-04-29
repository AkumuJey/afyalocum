import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Testimony } from "../../../hooks/useTestimoniesHook";

interface Props {
  testimony: Testimony;
}

const Testimonial = ({ testimony }: Props) => {
  return (
    <motion.div
      className="w-fit"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Paper elevation={3} sx={{ width: "100%", maxWidth: 350 }}>
        <Box p={2}>
          <Typography component={`h4`} fontWeight={`bold`}>
            {testimony.title}
          </Typography>
          <Typography component={`p`}>{testimony.body}</Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Testimonial;
