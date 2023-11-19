import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

interface Props {
  today: dayjs.Dayjs;
  handleDateChange: () => void
}
const TimePicker = ({ today, handleDateChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateTimePicker"]}
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: 2,
          paddingTop: 2,
        }}
      >
        <DateTimePicker
          label="Start date and time"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
          defaultValue={today}
          disablePast
          onChange={handleDateChange}
        />
        <DateTimePicker
          label="End date and time"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
          disablePast
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default TimePicker;
