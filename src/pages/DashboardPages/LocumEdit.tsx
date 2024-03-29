import { useLocation, useNavigate, useParams } from "react-router-dom";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";
import dayjs from "dayjs";
import {
  Job,
  SubmittedLocum,
  updateLocumDetails,
} from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import CreatedLocumNotification from "../../components/Dashboard/CreateLocums/CreatedLocumNotification";
import { useState } from "react";

const LocumEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const locum: SubmittedLocum = state.locum;
  const {
    title,
    requirements,
    description,
    location,
    rate,
    start,
    stop,
    booked,
    completed,
  } = locum;
  const job: Job = {
    title,
    requirements,
    description,
    location,
    rate,
    start: dayjs(start),
    stop: dayjs(stop),
    booked,
    completed,
  };
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()
  const handleUpdate = async (updatedLocum: SubmittedLocum) => {
    try {
      await updateLocumDetails(id as string, updatedLocum);
      console.log("Success")
      setSuccess(true)
      setTimeout(()=> {
        navigate(-1)
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <div>{id}</div>
      <CreatedLocumNotification
        open={success}
        handleClose={() => setSuccess(!success)}
      />
      <NewLocumFormLayout
        handleUpdate={handleUpdate}
        existingJob={job}
        handleNotification={() => setSuccess(true)}
      />
    </>
  );
};

export default LocumEdit;
