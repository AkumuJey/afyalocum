import { useLocation, useParams } from "react-router-dom";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";
import dayjs from "dayjs";
import {
  Job,
  SubmittedLocum,
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
  return (
    <>
      <div>{id}</div>
      <CreatedLocumNotification
        open={success}
        handleClose={() => setSuccess(!success)}
      />
      <NewLocumFormLayout
        existingJob={job}
        handleNotification={() => setSuccess(true)}
      />
    </>
  );
};

export default LocumEdit;
