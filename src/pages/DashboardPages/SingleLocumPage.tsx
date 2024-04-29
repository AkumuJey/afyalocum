import { User } from "firebase/auth";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SubmittedLocum } from "../../hooks/useCreateLocum";
import LocumLoading from "../../components/Dashboard/LocumLoading";
import SingleLocumCard from "../../components/Dashboard/SingleLocumCard";
import { db } from "../../firebase/firebase";
import useAuthStatus from "../../hooks/useAuthStatus";

const SingleLocumPage = () => {
  const { id } = useParams();
  const [locum, setLocum] = useState<SubmittedLocum | null>(null);
  const currentUser : User | null = useAuthStatus();
  const { uid } = currentUser as { uid: string };
  useEffect(() => {
    const locumsCollection = collection(db, "hospitals", uid, "locums");
    const locumRef = doc(locumsCollection, id);
    const unsubscribe = onSnapshot(locumRef, (locumDoc) => {
      const locumData = locumDoc.data();
      if (!locumData) return;
      setLocum({ ...(locumData as SubmittedLocum) });
    });
    return () => unsubscribe();
  }, [id, uid]);

  return (
    <>
      {!locum && <LocumLoading />}

      {locum && <SingleLocumCard locum={locum} />}
    </>
  );
};

export default SingleLocumPage;
