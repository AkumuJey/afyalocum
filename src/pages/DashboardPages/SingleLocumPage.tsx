import { Button, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  deleteLocum,
  SubmittedLocum,
} from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import { useState } from "react";

const SingleLocumPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { pathname, state } = useLocation();
  const locum: SubmittedLocum = state.locum;
  const { start, stop } = locum;
  const startTime = new Date(start).toLocaleTimeString();
  const stopTime = new Date(stop).toLocaleString();

  const handleDeletion = async () => {
    setLoading(true)
    try {
      await deleteLocum(id as string);
      navigate(-1);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };
  const navigate = useNavigate();
  const directToEdit = () => {
    console.log(`${pathname}/edit`);
    navigate(`${pathname}/edit`, { state: { locum } });
  };
  return (
    <>
      <div className={`w-full md:w-[40%] m-[1.5rem] ${loading ?  'opacity-90' : ''}`}>
        {id}
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            px: "1.5rem",
            py: "1rem",
            bgcolor: "blueviolet",
          }}
        >
          <Typography variant="h5" fontWeight={`bold`}>
            {locum.location}
          </Typography>
          <Typography>{locum.title}</Typography>
          <div>
            <Typography fontWeight={`bold`}>Requirements: </Typography>
            <p>{locum.requirements}</p>
          </div>
          <div>
            <Typography fontWeight={`bold`}>Job Description: </Typography>
            <p>{locum.description}</p>
          </div>
          <div>
            <Typography fontWeight={`bold`}>
              Hourly Rate: {locum.rate}
            </Typography>
          </div>
          <div>
            <Typography fontWeight={`bold`}> {startTime}</Typography>
            <Typography fontWeight={`bold`}> {stopTime}</Typography>
          </div>
          <div className="flex justify-between py-[0.5rem]">
            <Button variant="contained" color="error" onClick={handleDeletion} disabled={loading}>
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={locum.completed || locum.booked || loading}
              onClick={directToEdit}
            >
              Edit
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default SingleLocumPage;
