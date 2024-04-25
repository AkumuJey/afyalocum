import { Button, Typography } from "@mui/material";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  deleteLocum,
  SubmittedLocum,
} from "../../components/Dashboard/CreateLocums/hooks/useJobForm";
import LocumLoading from "../../components/Dashboard/LocumsArrayLoading";
import { db } from "../../firebase/firebase";

const SingleLocumPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const [locum, setLocum] = useState<SubmittedLocum | null>(null);
  const startTime = new Date(locum?.start || "").toLocaleTimeString();
  const stopTime = new Date(locum?.stop || "").toLocaleString();

  const handleDeletion = async () => {
    setLoading(true);
    try {
      await deleteLocum(id as string);
      if (id) navigate(pathname.slice(0, -(id.length + 1)), {replace: true})
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();
  const directToEdit = () => {
    navigate(`${pathname}/edit`, { state: { locum } });
  };

  useEffect(() => {
    const locumsCollection = collection(db, "locums");
    const locumRef = doc(locumsCollection, id);
    const unsubscribe = onSnapshot(locumRef, (locumDoc) => {
      const locumData = locumDoc.data()!;
      if (!locumData) return;
      setLocum({ ...(locumData as SubmittedLocum) });
    });
    return () => unsubscribe();
  }, [id]);

  return (
    <>
    {!locum && <LocumLoading />}
      <div
        className={`w-[90%] md:w-[40%] m-[1.5rem] ${
          loading ? "opacity-90" : ""
        }`}
      >
        {locum && (
          <>
            <Typography variant="h5" fontWeight={`bold`}>
              {locum?.location}
            </Typography>
            <Typography>{locum?.title}</Typography>
            <div>
              <Typography fontWeight={`bold`}>Requirements: </Typography>
              <p>{locum?.requirements}</p>
            </div>
            <div>
              <Typography fontWeight={`bold`}>Job Description: </Typography>
              <p>{locum?.description}</p>
            </div>
            <div>
              <Typography fontWeight={`bold`}>
                Hourly Rate: {locum?.rate}
              </Typography>
            </div>
            <div>
              <Typography fontWeight={`bold`}> {startTime}</Typography>
              <Typography fontWeight={`bold`}> {stopTime}</Typography>
            </div>
            <div className="flex justify-between py-[0.5rem]">
              <Button
                variant="contained"
                color="error"
                onClick={handleDeletion}
                disabled={loading || (locum?.booked && !locum?.completed)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={locum?.completed || locum?.booked || loading}
                onClick={directToEdit}
              >
                Edit
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleLocumPage;
