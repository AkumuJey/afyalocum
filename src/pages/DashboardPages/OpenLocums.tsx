import { useEffect, useState } from "react";
import LocumCard from "../../components/Dashboard/LocumCard";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { SubmittedLocum } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import { Skeleton } from "@mui/material";

const OpenLocums = () => {
  const [locums, setLocums] = useState<SubmittedLocum[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const locumsCollection = collection(db, "locums");
    const additionalFilter = where("booked", "==", false);
    const openLocumsCollection = query(locumsCollection, additionalFilter);
    const unsubscribe = onSnapshot(openLocumsCollection, (snapshot) => {
      const locumsArray: SubmittedLocum[] = [];
      snapshot.docs.forEach((doc) => {
        if (!doc.data().completed && !doc.data().booked) {
          const data = doc.data() as SubmittedLocum;
          data.id = doc.id;
          if (!doc.data().closed) {
            locumsArray.push(data);
          }
        }
      });
      setLoading(false);
      setLocums([...locumsArray]);
      console.log(locumsArray);
      console.log(locums);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="flex gap-[1.5rem] flex-wrap p-[1.5rem] justify-start w-[95%] md:w-4/4 mx-auto">
        {loading ? (
          Array(3)
            .fill(null)
            .map((_item, index) => (
              <>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: { xs: "100%", md: "30%" },
                    height: 180,
                    borderRadius: 3,
                  }}
                  key={index}
                />
              </>
            ))
        ) : locums.length === 0 ? (
          <p>No locums available</p>
        ) : (
          locums.map((locum) => <LocumCard key={locum.id} locum={locum} />)
        )}
      </div>
    </>
  );
};

export default OpenLocums;
