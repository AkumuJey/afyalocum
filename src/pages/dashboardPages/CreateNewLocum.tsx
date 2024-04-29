import { useEffect } from "react";
import { Job } from "../../hooks/useCreateLocum";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";
const CreateNew = () => {  
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
  useEffect(() => {
    document.title = "Create new locum"
  }, [])
  return (
    <>
      <NewLocumFormLayout update={false} existingJob={job}/>
    </>
  );
};

export default CreateNew;
