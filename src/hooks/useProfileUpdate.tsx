import { updateProfile, User } from "firebase/auth";
import { deleteObject, getDownloadURL, getMetadata, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import useAuthStatus from "./useAuthStatus";
import { db, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";


type Severity = "success" | "error";

const useProfileUpdate = () => {
    const currentUser: User | null = useAuthStatus();
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

  const updateImage = async (image: File) => {
    const storageRef = ref(storage, `images/${currentUser!.uid}`);
    const metaData = await getMetadata(storageRef);
    if (metaData) {
      await deleteObject(storageRef);
    }
    await uploadBytes(storageRef, image);
    const downloadUrl = await getDownloadURL(storageRef);
    await updateProfile((currentUser as User), {
      photoURL: downloadUrl,
    });
  };

  const updateUserDescription = async (description: string) => {
    if (currentUser) {
      const userRef = doc(db, "hospitals", currentUser.uid);
      await updateDoc(userRef, {
        hospitalDescription: description,
      });
    }
  };

  const updateUserName = async (name: string) => {
    if (!currentUser) {
      return;
    }
    await updateProfile(currentUser, {
      displayName: name,
    });
  };

  return { open, message, severity, handleSuccess, handleError, handleClose, updateUserName, updateImage, updateUserDescription };
};

export default useProfileUpdate;
