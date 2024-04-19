import { useLocation } from "react-router-dom";
import { Job } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";
const CreateNew = () => {
  const { state } = useLocation();
  document.title = state.title
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
      <NewLocumFormLayout update={false} existingJob={job}/>
    </>
  );
};

export default CreateNew;
