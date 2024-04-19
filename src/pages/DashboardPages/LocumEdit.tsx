import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import {
  Job,
  SubmittedLocum
} from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";



const LocumEdit = () => {
  const { state } = useLocation();
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
