import { InputLabel, TextareaAutosize } from "@mui/material";

import { ChangeEvent } from "react";

interface PartThree {
  description: string;
}
interface PropTypes extends PartThree {
  handlePartTwo: (partThree: PartThree) => void;
}

const PageTwo = ({ description, handlePartTwo }: PropTypes) => {
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    let goal = { [id]: value };
    handlePartTwo(goal);
  };
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
        value={description}
        onChange={handleInputChange}
        required
        placeholder=" Roles are ..."
        className="max-h-[100px] min-h-[80px] px-3 py-1 w-full bg-slate-100 overflow-hidden rounded-lg"
      />
    </>
  );
};

export default PageTwo;
