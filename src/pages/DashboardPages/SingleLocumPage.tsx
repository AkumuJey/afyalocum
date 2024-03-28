import { Button, Paper, Typography } from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";
import { SubmittedLocum } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";

const SingleLocumPage = () => {
  const { id } = useParams();
  const { pathname, state } = useLocation()
  const locum: SubmittedLocum = state.locum;
  const { start, stop } = locum;
  const startTime = new Date(start).toLocaleTimeString();
  const stopTime = new Date(stop).toLocaleString();

  const handleDeletion = () => {
    console.log(id)
  }
  return (
    <>
      <div className="w-full md:w-[40%] m-[1.5rem]">
        {id}
        <Paper
          elevation={2}
          sx={{ width: "100%", px: "1.5rem", py: "1rem", bgcolor: "blueviolet" }}
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
            <Typography fontWeight={`bold`}>Hourly Rate: {locum.rate}</Typography>
          </div>
          <div>
          <Typography fontWeight={`bold`}> {startTime}</Typography>
          <Typography fontWeight={`bold`}> {stopTime}</Typography>
          </div>
          <div className="flex justify-between py-[0.5rem]">
            <Button variant="contained" color="error" onClick={handleDeletion}>
              Delete
            </Button>
            <Button variant="contained" color="primary" disabled={pathname !== `/dashboard/open-locums/${id}`}>
              <Link to={`${pathname}/edit`}>Edit</Link>
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default SingleLocumPage;
