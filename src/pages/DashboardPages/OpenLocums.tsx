import { useEffect, useState } from "react";
import LocumCard from "../../components/Dashboard/LocumCard";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { SubmittedLocum } from "../../components/Dashboard/CreateLocums/hooks/useJobForm";

const OpenLocums = () => {
  const [locums, setLocums] = useState<SubmittedLocum[]>([]);
  useEffect(()=> {
    const locumsCollection = collection(db, "locums");
    const openLocumsFilter = where('completed', '==', false)
    const openLocumsCollection = query(locumsCollection, openLocumsFilter)
    const unsubscribe = onSnapshot(openLocumsCollection, (snapshot) => {
      const locumsArray: SubmittedLocum[] = []
      snapshot.docs.forEach((doc) => {
        if(!doc.data().completed && !doc.data().booked){
          const data = doc.data() as SubmittedLocum;
          data.id = doc.id;
          if (!doc.data().closed) {
              locumsArray.push(data);
          }
        }
    });
      setLocums([...locumsArray]);
      console.log(locumsArray)
      console.log(locums)
    })
    return () => unsubscribe();
  }, [])
  return (
    <>
      <div className="flex gap-[1.5rem] flex-wrap p-[1.5rem] justify-start w-[95%] md:w-4/4 mx-auto">
        {Array(9)
          .fill(null)
          .map((_item, index) => (
            <LocumCard index={index} key={index}/>
          ))}
      </div>
    </>
  );
};

export default OpenLocums;
