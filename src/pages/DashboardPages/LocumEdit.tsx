import dayjs from "dayjs";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Job,
  SubmittedLocum,
  updateLocumDetails,
} from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";
import NotificationElement from "../../components/NotificationElement";

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
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<Severity>("success")
  const [message, setMessage] = useState<string | null>(null);

  const navigate = useNavigate()
  const handleUpdate = async (updatedLocum: SubmittedLocum) => {
    try {
      await updateLocumDetails(id as string, updatedLocum);
      setSeverity("success")
      setMessage("Locum details have been successfully updated.");
      // navigate("/dashboard/open-locums" ,{ replace: true });
    } catch (_error) {
      setSeverity("error")
      setMessage("An error occurred while updating the locum details.")
    }
  };
  return (
    <>
      <NotificationElement
        handleClose={() => setOpen(false)}
        open={open}
        message={message as string}
        severity={severity}
      />
      <NewLocumFormLayout
        handleUpdate={handleUpdate}
        existingJob={job}
      />
    </>
  );
};

export default LocumEdit;
