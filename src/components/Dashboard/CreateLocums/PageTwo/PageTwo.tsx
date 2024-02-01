import { InputLabel, TextareaAutosize } from "@mui/material";

import useInputManagement from "../PageThree/useInputManagement";

interface PartTwo {
  description: string;
}
interface PropTypes extends PartTwo {
  handlePartTwo: (partThree: PartTwo) => void;
}

const PageTwo = ({ description, handlePartTwo }: PropTypes) => {
  const {handleInputChange} = useInputManagement()
  return (
    <>
      <InputLabel
        htmlFor="description"
        sx={{
          fontWeight: "bold",
          color: "black",
          width: "100%",
        }}
      >
        Job Description:
      </InputLabel>
      <TextareaAutosize
        maxRows={3}
        maxLength={150}
        id="description"
        name="description"
        value={description}
        onChange={(e) => handleInputChange(e, handlePartTwo)}
        required
        placeholder=" Roles are ..."
        className="max-h-[100px] min-h-[80px] px-3 py-1 w-full bg-slate-100 overflow-hidden rounded-lg"
      />
    </>
  );
};

export default PageTwo;
