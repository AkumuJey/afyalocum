import { useState } from "react";


type Severity = "success" | "error";

const useProfileUpdate = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [severity, setSeverity] = useState<Severity>("success");
  const handleClose = () => {
    setSeverity("success");
    setOpen(false);
    setOpen(false);
  };

  const handleError = (msg: string) => {
    setMessage(msg);
    setOpen(true);
    setSeverity("error");
  };

  const handleSuccess = (msg: string) => {
    setMessage(msg);
    setOpen(true);
    setSeverity("success");
  };
  return { open, message, severity, handleSuccess, handleError, handleClose };
};

export default useProfileUpdate;
