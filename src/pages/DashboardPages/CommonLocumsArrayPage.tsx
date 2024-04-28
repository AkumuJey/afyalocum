import { Typography } from "@mui/material";
import LocumCard from "../../components/Dashboard/LocumCard";
import LocumsArrayLoading from "../../components/Dashboard/LocumsArrayLoading";
import LocumSearchBar from "../../components/Dashboard/LocumSearchBar";
import useFetchLocumsArray from "../../hooks/useFetchLocumsArray";

interface PropTypes {
  booked: boolean;
  completed: boolean;
  title: string
}

const SettledLocums = ({booked, completed, title}: PropTypes) => {
  const { locums, loading, error } = useFetchLocumsArray(booked, completed, title)
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
