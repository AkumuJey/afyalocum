import { Skeleton } from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SubmittedLocum } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import LocumCard from "../../components/Dashboard/LocumCard";
import { db } from "../../firebase/firebase";

const OpenLocums = () => {
  const [locums, setLocums] = useState<SubmittedLocum[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const locumsCollection = collection(db, "locums");
    const unsubscribe = onSnapshot(locumsCollection, (snapshot) => {
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
    });
    return () => unsubscribe();
  }, []);

  
  return (
    <>
      <div className="flex gap-[1.5rem] flex-wrap p-[1.5rem] justify-start w-[95%] md:w-4/4 mx-auto">
        {error ? (
          <div>Error fetching locums</div>
        ) : (<>
        {loading ? (
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
            ))
        ) : locums.length === 0 ? (
          <p>No locums available</p>
        ) : (
          locums.map((locum) => <LocumCard key={locum.id} locum={locum} />)
        )}
        </>)}
      </div>
    </>
  );
};

export default OpenLocums;
