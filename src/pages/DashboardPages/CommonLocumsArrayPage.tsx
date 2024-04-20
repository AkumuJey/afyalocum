import { Skeleton, Typography } from "@mui/material";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SubmittedLocum } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import LocumCard from "../../components/Dashboard/LocumCard";
import { db } from "../../firebase/firebase";
import { useLocation } from "react-router-dom";

interface Status {
  booked: boolean;
  completed: boolean;
}

const SettledLocums = () => {
  const { state } = useLocation();
  const [locums, setLocums] = useState<SubmittedLocum[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { completed, booked } = state.status as Status;

  useEffect(() => {
    document.title = `AfyaLocum - ${state.title}`;
    const generateQuery = () => {
      const locumsCollection = collection(db, "locums");
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
  }, [completed, booked, state]);
  return (
    <>
      <div className="flex gap-[1.5rem] flex-wrap p-[1.5rem] justify-start w-[95%] md:w-4/4 mx-auto">
        {error && (
          <Typography variant="h3" color="red">
            An error occurred while fetching the data.
          </Typography>
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
                  key={`${item + index}`}
                />
              </>
            ))}

        {locums && !loading && !error && (
          <>
            {locums.length === 0 ? (
              <Typography variant="h3">
                No locums available
              </Typography>
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
