import { SyntheticEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const useProfileEssensitials = () => {
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = (event: Event | SyntheticEvent) => {
    const reference = anchorRef.current;
    if (reference && reference.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };
  const handleListKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const navigate = useNavigate();
  const handleSignOut = async () => {
    await auth.signOut();
    navigate("/login");
    setOpen(false);
  };

  return { handleToggle, handleListKeyDown, handleClose, handleSignOut, open };
};

export default useProfileEssensitials;
