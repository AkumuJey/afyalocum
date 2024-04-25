import { Button, Typography } from "@mui/material";
import { deleteLocum, SubmittedLocum } from "./CreateLocums/hooks/useJobForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

interface PropTypes {
  locum: SubmittedLocum;
}
const SingleLocumCard = ({ locum }: PropTypes) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const startTime = new Date(locum?.start || "").toLocaleTimeString();
  const stopTime = new Date(locum?.stop || "").toLocaleString();
  const handleDeletion = async () => {
    setLoading(true);
    try {
      await deleteLocum(id as string);
      if (id) navigate(pathname.slice(0, -(id.length + 1)), { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const directToEdit = () => {
    navigate(`${pathname}/edit`, { state: { locum } });
  };
  return (
    <>
    <div
        className={`w-[90%] md:w-[60%] m-[1.5rem] bg-purple-600 p-[1rem] rounded-md ${
          loading ? "opacity-90" : ""
        }`}
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
        <Button
          variant="contained"
          color="error"
          onClick={handleDeletion}
          disabled={loading || (locum.booked && !locum.completed)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={locum?.completed || locum?.booked || loading}
          onClick={directToEdit}
        >
          Edit
        </Button>
      </div>
      </div>
    </>
  );
};

export default SingleLocumCard;
