import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { Dayjs } from "dayjs";
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
  export const submitToFirebase = async (job: SubmittedLocum) => {
    try {
      const locumsCollection = collection(db, "locums")
      const docRef = await addDoc(locumsCollection, job);
      console.log(docRef.id)
    } catch (error) {
      return error
    }
}