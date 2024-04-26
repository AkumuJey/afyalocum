import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export interface organizationInfo {
  name: string;
  password: string;
  email: string;
  hospitalDescription: string;
  image: File | null;
}

const useRegistrationHooks = () => {
  const { currentUser } = useContext(AuthContext)
  const { uid } = currentUser
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

  const createUser = async (auth: Auth, email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  };
  const handleRegistration = async (organizationInfo: organizationInfo) => {
    const { email, password, name, hospitalDescription, image } =
      organizationInfo;
    try {
      const userCredential = await createUser(auth, email, password);
      const user = userCredential.user;
      await updateImageAndName(user, image as File, name);
      await updateHospitalsCollection(user, hospitalDescription);
      await sendEmailVerification(user);
      await auth.signOut();
    } catch (err) {
      throw new Error("Failed Try Again");
    }
  };
  return { handleRegistration };
};

export default useRegistrationHooks;
