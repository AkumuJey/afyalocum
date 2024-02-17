
import {
  User,
  updateProfile
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase/firebase";



const createTemporaryURL = (image: File | null) => {
  if (image) {
    return URL.createObjectURL(image);
  }
  return "";
};

const updateHospitalsCollection = async (
  user: User,
  hospitalDescription: string
) => {
  const userRef = doc(db, "hospitals", user.uid);
  await setDoc(userRef, {
    hospitalDescription,
  });
};


const updateImageAndName = async (user: User, image: File, name: string) => {
  const storageRef = ref(storage, `images/${user.uid}`);
  await uploadBytes(storageRef, image);
  const downloadUrl = await getDownloadURL(storageRef);
  await updateProfile(user, {
    displayName: name,
    photoURL: downloadUrl,
  });
};


const useRegistrationHooks = () => {
  return {createTemporaryURL, updateHospitalsCollection, updateImageAndName }
}

export default useRegistrationHooks