import { ChangeEvent, useState } from "react";
import useProfileUpdate from "./useProfileUpdate";

const useProfileImageUpdate = () => {
  const { updateImage, handleSuccess, handleError } = useProfileUpdate();
  const [take, setTake] = useState(true);

  const enableEditing = () => {
    setIsEditable(true);
  };
  const disableEditing = () => setIsEditable(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const handleRetake = () => {
    setTake(true);
    setImage(null);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const imageHolder = e.target.files[0];
    setImage(imageHolder);
    setImageUrl(URL.createObjectURL(imageHolder));
    setTake(false);
  };

  const handlePhotoUpdate = async () => {
    setLoading(true);
    try {
      await updateImage(image as File);
      setIsEditable(false);
      setImage(null);
    } catch (_error) {
      throw new Error("Failed");
      
    } finally {
      setLoading(false);
    }
  };

  return {
    take,
    loading,
    imageUrl,
    isEditable,
    image,
    handlePhotoUpdate,
    handleRetake,
    handleImageChange,
    handleSuccess,
    handleError,
    enableEditing,
    disableEditing,
  };
};

export default useProfileImageUpdate;
