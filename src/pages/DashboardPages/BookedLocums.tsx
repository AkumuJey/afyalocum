import { useEffect, useState } from "react";
import LocumCard from "../../components/Dashboard/LocumCard";
import {
  collection,
  DocumentData,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { SubmittedLocum } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import { Skeleton } from "@mui/material";
import { Unsubscribe } from "firebase/auth";

const BookedLocums = () => {
  const [locums, setLocums] = useState<SubmittedLocum[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchOpenLocums = () => {
      try {
        setLoading(true);
        const locumsCollection = collection(db, "locums");
        const bookedFilter = where("booked", "==", true);
        const completedFilter = where("completed", "==", false);
        const openLocumsCollection = query(
          locumsCollection,
          bookedFilter,
          completedFilter
        );
        const unsubscribe = onSnapshot(openLocumsCollection, (snapshot) => {
          const locumsArray = snapshot.docs
            .map((doc) => {
              const data = doc.data() as SubmittedLocum;
              return { ...data, id: doc.id };
            })
            .filter((doc: DocumentData) => !doc.closed);
          setLoading(false);
          setLocums(locumsArray);
        });
        return unsubscribe;
      } catch (_error) {
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    };
    const unsubscribe: Unsubscribe | undefined = fetchOpenLocums();
    if (unsubscribe) {
      return () => unsubscribe();
    }
  }, []);

  return (
    <>
      <div className="flex gap-[1.5rem] flex-wrap p-[1.5rem] justify-start w-[95%] md:w-4/4 mx-auto">
        {error && (
          <>
            <div>Error Loading locums</div>
          </>
        )}
        {loading &&
          Array(3)
            .fill("key")
            .map((item, index) => (
              <>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: { xs: "100%", md: "30%" },
                    height: 180,
                    borderRadius: 3,
                  }}
                  key={item + index}
                />
              </>
            ))}
        {!loading && locums.length === 0 && <p>No locums available</p>}
        {!loading &&
          locums.length > 0 &&
          locums.map((locum) => <LocumCard key={locum.id} locum={locum} />)}
      </div>
    </>
  );
};

export default BookedLocums;
