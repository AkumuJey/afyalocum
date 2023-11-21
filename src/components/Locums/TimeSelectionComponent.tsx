import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";


interface Props {
  handleDateChange: (newValue: unknown ) => void
}
const TimeSelectionComponent = ({ handleDateChange }: Props) => {
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
          disablePast
          onChange={(newValue) => handleDateChange(newValue)}
        />
        <DateTimePicker
          label="End date and time"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
          disablePast
          onChange={(newValue) => handleDateChange(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default TimeSelectionComponent;
