import { Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";
const SponsorOrApprovalComponent = () => {
  return (
    <motion.div
      className="font-bold flex flex-col justify-center items-center"
      style={{ width: "100px" }}
    >
      <Typography variant="h6">KMPDC</Typography>
      <Avatar alt="Logo" src={``} sx={{ width: "3rem", height: "3rem" }} />
    </motion.div>
  );
};

export default SponsorOrApprovalComponent;
