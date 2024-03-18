import { Place } from '@mui/icons-material'
import { Paper, PropTypes, Typography } from '@mui/material'


import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

interface PropTypes{
  index: number
}
const LocumCard = ({index} : PropTypes) => {
  return (
    <motion.div whileHover={{ scale: 1.10 }} transition={{ duration: 0.3,}} className='w-full md:w-[30%]'>
      <Link to={`${index}`} className='w-full h-full'>
      <Paper elevation={2} sx={{ p: "0.5rem", bgcolor: "#009999", width: "100%" }}>
            <div className="flex items-center gap-1 mb-1">
              <Place />
              <Typography variant="h6" fontWeight={`bold`}>
                North East, Northumberland
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-1 mb-1 p-1">
              <Typography>
                {" "}
                <span className="font-bold">Urology Consultant</span> –
                Northumberland
              </Typography>
              <Typography>Speciality</Typography>
              <Typography>Hourly Rate: Consultant</Typography>
              <Typography>Start - Stop</Typography>
            </div>
      </Paper>
      </Link>
    </motion.div>
  )
}

export default LocumCard
