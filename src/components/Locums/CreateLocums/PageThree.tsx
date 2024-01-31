import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";

interface PropTypes {
    handleDateTimeChange: (newValue: unknown, start: string) => void;
    start: unknown;
    stop: unknown;
    minDateTime: Dayjs
  }

const PageThree = ({handleDateTimeChange,
    start,
    stop,
    minDateTime} : PropTypes) => {
  return (
    <><LocalizationProvider dateAdapter={AdapterDayjs}>
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
  </LocalizationProvider></>
  )
}

export default PageThree