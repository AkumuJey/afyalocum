import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
export interface Job {
    title: string;
    requirements: string;
    description: string;
    location: string;
    rate: null | number;
    start: string;
    stop: string;
    completed: boolean;
  }
  export const submitToFirebase = async (job: Job) => {
    try {
      const locumsCollection = collection(db, "locums")
      const docRef = await addDoc(locumsCollection, job);
      console.log(docRef.id)
    } catch (error) {
      return error
    }
}