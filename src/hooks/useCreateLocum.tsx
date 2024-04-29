import { Dayjs } from "dayjs";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import useAuthStatus from "./useAuthStatus";

export interface Job {
  title: string;
  requirements: string;
  description: string;
  location: string;
  rate: null | number;
  start: null | Date | Dayjs;
  stop: null | Date | Dayjs;
  booked: boolean;
  completed: boolean;
  id?: string;
}
export interface SubmittedLocum {
  title: string;
  requirements: string;
  description: string;
  location: string;
  rate: null | number;
  start: string;
  stop: string;
  completed: boolean;
  booked: boolean;
  id?: string;
}

export interface PartOne {
  title: string;
  requirements: string;
}

export interface StartStopTime {
  [key: string]: Date | Dayjs | null;
}
export interface PartThree {
  location: string;
  rate: number | null;
}
export interface PartTwo {
  description: string;
}

const useCreateLocum = () => {
  const currentUser = useAuthStatus();
  const { uid } = currentUser as { uid: string };
  const locumsCollection = collection(db, "hospitals", uid, "locums");

  const submitToFirebase = async (job: SubmittedLocum) => {
    try {
      await addDoc(locumsCollection, job);
    } catch (error) {
      throw new Error("Faliled to  update the job details.");
    }
  };

  const updateLocumDetails = async (id: string, updatedJob: SubmittedLocum) => {
    try {
      const docRef = doc(locumsCollection, id);
      await updateDoc(docRef, { ...updatedJob });
    } catch (error) {
      throw new Error("Faliled to  update the job details.");
    }
  };

  const deleteLocum = async (id: string) => {
    try {
      const docRef = doc(locumsCollection, id);
      await deleteDoc(docRef);
    } catch (error) {
      throw new Error("Faliled to delete the locum.");
    }
  };

  return { submitToFirebase, updateLocumDetails, deleteLocum };
};

export default useCreateLocum;
