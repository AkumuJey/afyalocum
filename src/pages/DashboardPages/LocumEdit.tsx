import { useParams } from "react-router-dom";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";
import dayjs from "dayjs";
import { Job } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import CreatedLocumNotification from "../../components/Dashboard/CreateLocums/CreatedLocumNotification";
import { useState } from "react";

const LocumEdit = () => {
    const {id} = useParams()

    const job: Job = {
      title: "Joseph",
      requirements: "Jjdwfvlae",
      description: "scsc",
      location: "dscsdc",
      rate: 66,
      start: dayjs("Wed, 27 Mar 2024 21:00:00 GMT"),
      stop: dayjs ("Fri, 29 Mar 2024 21:00:00 GMT"),
      completed: false,
    }
    const [success, setSuccess] = useState(false)
  return (
    <>
    <div>{id}</div>
    <CreatedLocumNotification
        open={success}
        handleClose={() => setSuccess(!success)}
      />
      <NewLocumFormLayout existingJob={job} handleNotification={() => setSuccess(true)}/>
    </>
  );
};

export default LocumEdit;
