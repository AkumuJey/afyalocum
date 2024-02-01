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

const PageFour = () => {
  const [partThree, setPartThree] = useState<PartThree>({
    start: null,
    stop: null,
  });
  const [minDateTime, setMinDateTime] = useState<Dayjs>(dayjs().add(1, "hour"));

  const handleDateTimeChange = (newValue: unknown | Dayjs, type: string) => {
    if (dayjs.isDayjs(newValue)) {
      const value = newValue.toDate();
      setPartThree({ ...partThree, [type]: value });
      if (type === "start") {
        setMinDateTime(newValue.add(1, "hour"));
      }
    }
    console.log(partThree);
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
            defaultValue={partThree.start}
            value={partThree.start}
            disablePast
            onChange={(newValue) => handleDateTimeChange(newValue, "start")}
          />
          <DateTimePicker
            label="End date and time"
            defaultValue={partThree.stop}
            disablePast
            value={partThree.stop}
            minDateTime={minDateTime}
            onChange={(newValue) => handleDateTimeChange(newValue, "stop")}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default PageFour;
