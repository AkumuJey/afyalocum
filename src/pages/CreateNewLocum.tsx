import { useState } from "react";
import CreatedLocumNotification from "../components/Dashboard/CreateLocums/CreatedLocumNotification";
import NewLocumFormLayout from "../components/Dashboard/CreateLocums/NewLocumFormLayout";

const CreateNew = () => {
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <>
      <CreatedLocumNotification
        open={success}
        handleClose={() => setSuccess(!success)}
      />
      <NewLocumFormLayout handleNotification={() => setSuccess(true)}/>
    </>
  );
};

export default CreateNew;
