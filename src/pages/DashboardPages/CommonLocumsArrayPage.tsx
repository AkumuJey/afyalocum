import { Typography } from "@mui/material";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SubmittedLocum } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import LocumCard from "../../components/Dashboard/LocumCard";
import LocumsArrayLoading from "../../components/Dashboard/LocumsArrayLoading";
import LocumSearchBar from "../../components/Dashboard/LocumSearchBar";
import { db } from "../../firebase/firebase";
import { AuthContext } from "../../contexts/AuthContext";

interface Status {
  booked: boolean;
  completed: boolean;
}

const SettledLocums = () => {
  const { state} = useLocation();
  const [locums, setLocums] = useState<SubmittedLocum[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { completed, booked } = state.status as Status;

  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser as {uid: string}

  useEffect(() => {
    document.title = `AfyaLocum - ${state.title}`;
    const { completed, booked } = state.status as Status;
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
  }, [completed, booked, state, uid]);
  return (
    <>
      <div className="flex gap-[1.5rem] flex-wrap p-[1.5rem] justify-start w-[95%] md:w-4/4 mx-auto">
        <LocumSearchBar locums={locums}/>
        {error && (
          <Typography variant="h3" color="red">
            An error occurred while fetching the data.
          </Typography>
        )}
        {loading && <LocumsArrayLoading />}

        {locums && !loading && !error && (
          <>
            {locums.length === 0 ? (
              <Typography variant="h3">No locums available</Typography>
            ) : (
              locums.map((locum) => <LocumCard key={locum.id} locum={locum} />)
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SettledLocums;
