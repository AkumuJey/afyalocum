import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ChangeEvent } from "react";
import { Input, InputLabel } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";



interface Props {
  handleDateChange: (newValue: unknown ) => void
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  location: string;
  start: unknown,
  stop: unknown
  rate: number | null;
}
const TimeSelectionComponent = ({ handleDateChange, handleInputChange, rate,
  location, start, stop }: Props) => {
  const ariaLabel = { "aria-label": "description" };
  return (
    <>
    <InputLabel
        htmlFor="location"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        <PlaceIcon /> Location:
      </InputLabel>
      <Input
        id="location"
        value={location}
        onChange={handleInputChange}
        placeholder="e.g. Westlands Nairobi"
        inputProps={ariaLabel}
        required
        className="w-full bg-white px-3 py-1 rounded-md overflow-hidden"
        sx={{
          my: '0.5rem'
        }}
      />
      <InputLabel
        htmlFor="rate"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Hourly Rate (KSh):
      </InputLabel>
      <Input
        id="rate"
        defaultValue={rate}
        type="number"
        onChange={handleInputChange}
        inputProps={{ min: 0, ...ariaLabel }}
        required
        sx={{
          my: '0.3rem',
          py: `0.25rem`
        }}
        className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
      />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateTimePicker"]}
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: 1,
          paddingTop: 1,
        }}
      >
        <DateTimePicker
          label="Start date and time"
          defaultValue={start}
          sx={{ backgroundColor: "white", borderRadius: 1, }}
          disablePast
          onChange={(newValue) => handleDateChange(newValue)}
        />
        <DateTimePicker
          label="End date and time"
          defaultValue={stop}
          sx={{ backgroundColor: "white", borderRadius: 1 }}
          disablePast
          onChange={(newValue) => handleDateChange(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
    </>
  );
};

export default TimeSelectionComponent;
