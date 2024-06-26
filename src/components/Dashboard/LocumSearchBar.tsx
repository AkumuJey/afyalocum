import { Autocomplete, Stack, TextField } from "@mui/material";
import { SubmittedLocum } from "../../hooks/useCreateLocum";
import { useLocation, useNavigate } from "react-router-dom";

interface PropTypes {
  locums: SubmittedLocum[] | null;
}
const LocumSearchBar = ({ locums }: PropTypes) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const getData = (locum: SubmittedLocum) => {
    navigate(`${pathname}/${locum.id}`, { state: { locum } });
  };
  
  return (
    <div className="w-full relative">
      <Stack spacing={2} sx={{ width: 300, ml: "2rem" }}>
        <Autocomplete
          id="trial"
          freeSolo
          clearIcon
          options={locums as SubmittedLocum[]}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return "";
            }
            return option.location;
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Find locum with location"
              inputProps={{
                ...params.inputProps,
                type: "search",
              }}
            />
          )}
          noOptionsText="No locums found"
          onChange={(_event, newValue) => {
            getData(newValue as SubmittedLocum);
          }}
        />
      </Stack>
    </div>
  );
};

export default LocumSearchBar;
