import { FormEvent, useState } from "react";
import useAuthStatus from "./useAuthStatus";
import useProfileUpdate from "./useProfileUpdate";
import { User } from "firebase/auth";

type HandleError = (msg: string) => void;
type HandleSuccess = (msg: string) => void;
const useProfileName = (
  handleSuccess: HandleSuccess,
  handleError: HandleError
) => {
  const currentUser: User | null = useAuthStatus();
  const { updateUserName } = useProfileUpdate();
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const { displayName } = currentUser as User;
  const enableEdit = () => setIsEditable(true);
  const disableEdit = () => setIsEditable(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const { name } = data;
      await updateUserName(name as string);
      handleSuccess("Hospital name updated successfully");
    } catch (_error) {
      handleError("Error updating name");
    } finally {
      setLoading(false);
      setIsEditable(false);
    }
  };

  return {
    displayName,
    isEditable,
    loading,
    enableEdit,
    disableEdit,
    handleSubmit,
  };
};

export default useProfileName;
