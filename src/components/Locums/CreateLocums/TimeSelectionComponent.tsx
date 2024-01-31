import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";
import { ChangeEvent } from "react";
import PageTwo from "./PageTwo";

interface Props {
  handleDateTimeChange: (newValue: unknown, start: string) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  location: string;
  start: unknown;
  stop: unknown;
  rate: number | null;
  minDateTime: Dayjs
}
const TimeSelectionComponent = ({
  handleDateTimeChange,
  handleInputChange,
  rate,
  location,
  start,
  stop,
  minDateTime
}: Props) => {
  
  return (
    <>
      <PageTwo handleInputChange={handleInputChange} location={location} rate={rate}/>
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
            value={start}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
            disablePast
            onChange={(newValue) => handleDateTimeChange(newValue, "start")}
          />
          <DateTimePicker
            label="End date and time"
            defaultValue={stop}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
            disablePast
            value={stop}
            minDateTime={minDateTime}
            onChange={(newValue) => handleDateTimeChange(newValue, "stop")}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default TimeSelectionComponent;
