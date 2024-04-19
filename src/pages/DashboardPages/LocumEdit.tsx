import dayjs from "dayjs";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Job,
  SubmittedLocum,
  updateLocumDetails,
} from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";

type Severity = "success" | "error";

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
  return (
    <>
      <NewLocumFormLayout
        update={true}
        existingJob={job}
      />
    </>
  );
};

export default LocumEdit;
