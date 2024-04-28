import { doc, DocumentData, getDoc } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import useAuthStatus from "./useAuthStatus";
import useProfileUpdate from "./useProfileUpdate";
import { User } from "firebase/auth";

type HandleError = (msg: string) => void;
type HandleSuccess = (msg: string) => void;
const useProfileDescription = (
  handleSuccess: HandleSuccess,
  handleError: HandleError
) => {
  const currentUser: User | null = useAuthStatus();
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState<string>(
    "Enter your description..."
  );
  const { updateUserDescription } = useProfileUpdate();

  const enableEdit = () => setIsEditable(true)
  const disableEdit = () => setIsEditable(false)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const { description } = data;
      await updateUserDescription(description as string);
      handleSuccess("Hospital description updated successfully");
    } catch (_error) {
      handleError("Error updating description");
    } finally {
      setLoading(false);
      setIsEditable(false);
    }
  };

  useEffect(() => {
    const fetchDescription = async () => {
      const userRef = doc(db, "hospitals", currentUser!.uid);
      const userDescription = await getDoc(userRef);
      const descriptionData = userDescription.data();
      const { hospitalDescription } = descriptionData as DocumentData;
      setDescription(hospitalDescription as string);
    };
    fetchDescription();
  });
  return { isEditable, loading, description, enableEdit, disableEdit,handleSubmit };
};

export default useProfileDescription;
