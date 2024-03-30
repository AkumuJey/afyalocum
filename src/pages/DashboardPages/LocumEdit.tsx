import dayjs from "dayjs";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CreatedLocumNotification from "../../components/Dashboard/CreateLocums/CreatedLocumNotification";
import {
  Job,
  SubmittedLocum,
  updateLocumDetails,
} from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";

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
  const handleUpdate = async (updatedLocum: SubmittedLocum) => {
    try {
      await updateLocumDetails(id as string, updatedLocum);
      setSuccess(true)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
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
