import { Dayjs } from "dayjs";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
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

// export interface PartOne {
//   [key: string]: string
// }
export interface PartOne {
  title: string;
  requirements: string;
}

export interface StartStopTime {
  [key: string]:  Date | Dayjs | null
}
export interface PartThree {
  location: string;
  rate: number | null;
}
export interface PartTwo {
  description: string;
}

export const submitToFirebase = async (job: SubmittedLocum) => {
  try {
    const locumsCollection = collection(db, "locums");
    const docRef = await addDoc(locumsCollection, job);
    console.log(docRef.id);
  } catch (error) {
    return error;
  }
};

export const updateLocumDetails = async (id: string, updatedJob: SubmittedLocum) => {
  try {
    const docRef = doc(db, "locums", id);
    await updateDoc(docRef, { ...updatedJob });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocum = async (id: string) => {
  try {
    const docRef = doc(db, "locums", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error)
  }
}
