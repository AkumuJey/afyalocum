import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { Dayjs } from "dayjs";

export interface Job {
    title: string;
    requirements: string;
    description: string;
    location: string;
    rate: null | number;
    start: null | Date |  Dayjs;
    stop: null | Date | Dayjs;
    completed: boolean;
  }
  export const submitToFirebase = async (job: Job) => {
    try {
      console.log(job.start?.toString())
      const locumsCollection = await collection(db, "locums")
      const docRef = await addDoc(locumsCollection, job);
      console.log(docRef)
    } catch (error) {
      console.log(error)
    }
}