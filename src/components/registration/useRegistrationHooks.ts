import { User } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";

export const uploadImage = async (user: User, image: File,) => {
    const storageRef = ref(storage, `images/${user.uid}`);
    await uploadBytes(storageRef, image);
  };
  
  export const uploadImage = async (user: User, image: File,) => {
    const updateUserProfile = async (user: User, name: string) => {
    const downloadUrl = await getDownloadURL(ref(storage, `images/${user.uid}`));
    await updateProfile(user, { displayName: name, photoURL: downloadUrl });
  };
  
export const uploadImage = async (user: User, image: File,) => {
    const createHospitalDocument = async (user: User, hospitalDescription: string) => {
    const userRef = doc(db, "hospitals", user.uid);
    await setDoc(userRef, { hospitalDescription });
  };
  

const useRegistrationHooks = () => {
  return {}
}

export default useRegistrationHooks