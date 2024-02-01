import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface PartThree {
  start: unknown;
  stop: unknown;
}
interface PropTypes extends PartThree {
  handlePartFour: (partThree: PartThree) => void;
}

const PageFour = ({ start, stop, handlePartFour }: PropTypes) => {
  const [minDateTime, setMinDateTime] = useState<Dayjs>(dayjs().add(1, "hour"));
  const [minStart, setMinStart] = useState<Dayjs>(dayjs());

  const handleDateTimeChange = (newValue: unknown | Dayjs, type: string) => {
    if (dayjs.isDayjs(newValue)) {
      let goal = { [type]: newValue };
      handlePartFour(goal);
      if (type === "start") {
        setMinDateTime(newValue.add(1, "hour"));
      }
      if (type === "stop") {
        setMinStart(newValue);
      }
    }
  };
  return (
    <>
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
            disablePast
            minDateTime={minStart}
            onChange={(newValue) => handleDateTimeChange(newValue, "start")}
          />
          <DateTimePicker
            label="End date and time"
            defaultValue={stop}
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

export default PageFour;
