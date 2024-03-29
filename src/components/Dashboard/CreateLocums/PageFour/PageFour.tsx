import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { StartStopTime } from "../hooks/useJobForm";

interface PropTypes {
  handlePartFour: (partThree: StartStopTime) => void;
  start: Date | Dayjs | null;
  stop: Date | Dayjs | null;
}

const PageFour = ({ start, stop, handlePartFour }: PropTypes) => {
  const [minStop, setMinStop] = useState<Dayjs>(dayjs().add(1, "hour"));
  const [minStart, setMinStart] = useState<Dayjs>(dayjs());

  const handleMinStartStop = (type: string, newValue: Dayjs) => {
    if (type === "start") {
      setMinStop(newValue.add(1, "hour"));
    }
    if (type === "stop") {
      setMinStart(newValue);
    }
  };
  const handleDateTimeChange = (newValue: unknown | Dayjs, type: string) => {
    if (dayjs.isDayjs(newValue)) {
      const goal: StartStopTime = { [type]: newValue as Dayjs };
      handlePartFour(goal);
      handleMinStartStop(type, newValue);
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
            minDateTime={minStop}
            onChange={(newValue) => handleDateTimeChange(newValue, "stop")}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default PageFour;
