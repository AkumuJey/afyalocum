import { Place } from '@mui/icons-material'
import { Paper, PropTypes, Typography } from '@mui/material'


import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { SubmittedLocum } from './CreateLocums/hooks/useJobForm';

interface PropTypes{
  locum: SubmittedLocum
}
const LocumCard = ({ locum} : PropTypes) => {
  const {start, stop} = locum
  const startTime = new Date(start).toLocaleTimeString()
  const stopTime = new Date(stop).toLocaleString()
  return (
    <motion.div whileHover={{ scale: 1.10 }} transition={{ duration: 0.3,}} className='w-full md:w-[30%]'>
      <Link to={`${locum.id}`} className='w-full h-full'>
      <Paper elevation={2} sx={{ p: "0.5rem", bgcolor: "#009999", width: "100%" }}>
            <div className="flex items-center gap-1 mb-1">
              <Place />
              <Typography variant="h6" fontWeight={`bold`}>
                {locum.location}
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-1 mb-1 p-1">
              <Typography>
                {" "}
                <span className="font-bold">{locum.description}</span> –
                Northumberland
              </Typography>
              <Typography>{locum.title}</Typography>
              <Typography>Hourly Rate: {locum.rate}</Typography>
              <Typography fontWeight={`bold`}> {startTime}</Typography>
              <Typography fontWeight={`bold`}> {stopTime}</Typography>
            </div>
      </Paper>
      </Link>
    </motion.div>
  )
}

export default LocumCard
