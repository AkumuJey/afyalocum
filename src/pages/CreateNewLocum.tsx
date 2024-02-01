import { Button } from "@mui/material";
import { useState } from "react";

import CreatedLocumNotification from "../components/Dashboard/CreateLocums/CreatedLocumNotification";
import NewLocumFormLayout from "../components/Dashboard/CreateLocums/NewLocumFormLayout";

const CreateNew = () => {
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setSuccess(!success)} color="secondary">
        Open
      </Button>
      <CreatedLocumNotification
        open={success}
        handleClose={() => setSuccess(!success)}
      />
      <NewLocumFormLayout />
    </>
  );
};

export default CreateNew;
