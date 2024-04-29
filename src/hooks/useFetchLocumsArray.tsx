import { User } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SubmittedLocum } from "../components/Dashboard/CreateLocums/hooks/useJobForm";
import { db } from "../firebase/firebase";
import useAuthStatus from "./useAuthStatus";


const useFetchLocumsArray = (booked: boolean, completed: boolean, title: string) => {
  const [locums, setLocums] = useState<SubmittedLocum[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const currentUser: User | null = useAuthStatus();
  const { uid } = currentUser as { uid: string };

  useEffect(() => {
    document.title = `AfyaLocum - ${title}`;
    const generateQuery = () => {
      const locumsCollection = collection(db, "hospitals", uid, "locums");
      const openLocumsFilter = where("completed", "==", completed);
      const bookedLocumsFilter = where("booked", "==", booked);
      return query(locumsCollection, bookedLocumsFilter, openLocumsFilter);
    };
    setLoading(true);
    const locumsCollection = generateQuery();
    const unsubscribe = onSnapshot(locumsCollection, (snapshot) => {
      try {
        setLoading(true);
        const locumsArray: SubmittedLocum[] = [];
        snapshot.docs.forEach((doc) => {
          const data = doc.data() as SubmittedLocum;
          data.id = doc.id;
          if (!doc.data().closed) {
            locumsArray.push(data);
          }
        });
        setError(false);
        setLocums([...locumsArray]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [completed, booked, title, uid]);
  return { locums, loading, error };
};

export default useFetchLocumsArray;
