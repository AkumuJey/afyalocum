import { Typography } from "@mui/material";
import LocumCard from "../../components/Dashboard/LocumCard";
import LocumsArrayLoading from "../../components/Dashboard/LocumsArrayLoading";
import LocumSearchBar from "../../components/Dashboard/LocumSearchBar";
import useFetchLocumsArray from "../../hooks/useFetchLocumsArray";

interface PropTypes {
  booked: boolean;
  completed: boolean;
  title: string;
}

const SettledLocums = ({ booked, completed, title }: PropTypes) => {
  const { locums, loading, error } = useFetchLocumsArray(
    booked,
    completed,
    title
  );
  return (
    <>
      <div className="valid-height w-full md:w-[75%] py-[1rem]">
        <LocumSearchBar locums={locums} />
        {error && (
          <Typography variant="h3" color="red" sx={{ ml: "2rem" }}>
            An error occurred while fetching the data.
          </Typography>
        )}
        <div className="h-full flex flex-col md:flex-row justify-evenly px-[1rem] gap-[0.5rem] my-[0.5rem]">
          <>{loading && <LocumsArrayLoading />}</>

          {locums && !loading && !error && (
            <>
              {locums.length === 0 ? (
                <Typography variant="h3">No locums available</Typography>
              ) : (
                locums.map((locum) => (
                  <LocumCard key={locum.id} locum={locum} />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SettledLocums;
