import { useState } from "react";
import CreatedLocumNotification from "../../components/Dashboard/CreateLocums/CreatedLocumNotification";
import { Job } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";
const CreateNew = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const job: Job = {
    title: "",
    requirements: "",
    description: "",
    location: "",
    rate: null,
    start: null,
    stop: null,
    booked:  false,
    completed: false,
  }
  return (
    <>
      <CreatedLocumNotification
        open={success}
        handleClose={() => setSuccess(!success)}
      />
      <NewLocumFormLayout handleNotification={() => setSuccess(true)} existingJob={job}/>
    </>
  );
};

export default CreateNew;
