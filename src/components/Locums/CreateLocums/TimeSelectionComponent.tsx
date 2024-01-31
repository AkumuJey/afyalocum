import { Dayjs } from "dayjs";
import { ChangeEvent } from "react";
import PageThree from "./PageThree";
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
  minDateTime: Dayjs;
}
const TimeSelectionComponent = ({
  handleDateTimeChange,
  handleInputChange,
  rate,
  location,
  start,
  stop,
  minDateTime,
}: Props) => {
  return (
    <>
      <PageTwo
        handleInputChange={handleInputChange}
        location={location}
        rate={rate}
      />
      <PageThree
        handleDateTimeChange={handleDateTimeChange}
        minDateTime={minDateTime}
        start={start}
        stop={stop}
      />
    </>
  );
};

export default TimeSelectionComponent;
