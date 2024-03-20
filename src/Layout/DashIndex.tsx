import { motion } from "framer-motion";
import { Button, Paper, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const paperStyling = { width: "100%", height: "100%" };
const DashIndex = () => {
  return (
    <>
      <div className="flex flex-wrap p-[1rem] md:p-[2rem] justify-evenly gap-[1.5rem] rounded-md ">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-[95%] md:w-[40%] font-bold md:h-[8rem] shadow-md overflow-hidden bg-teal-400 rounded-md text-xl"
        >
          <RouterLink to={`/dashboard/create-new-locum`} className="h-full w-full flex justify-center items-center">
            <p>Create new locum</p>
          </RouterLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-[95%] md:w-[40%] font-bold md:h-[8rem] shadow-md overflow-hidden bg-teal-400 rounded-md text-xl"
        >
          <RouterLink to={`/dashboard/open-locums`} className="h-full w-full flex justify-center items-center">
            <p>Open Locums</p>
          </RouterLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-[95%] md:w-[40%] font-bold md:h-[8rem] shadow-md overflow-hidden bg-teal-400 rounded-md text-xl"
        >
          <RouterLink to={`/dashboard/booked-locums`} className="h-full w-full flex justify-center items-center">
            <p>Booked Locums</p>
          </RouterLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-[95%] md:w-[40%] font-bold md:h-[8rem] shadow-md overflow-hidden bg-teal-400 rounded-md text-xl"
        >
          <RouterLink to={`/dashboard/settled-locums`} className="h-full w-full flex justify-center items-center">
            <p>Settled Locum</p>
          </RouterLink>
        </motion.div>
      </div>
    </>
  );
};

export default DashIndex;
