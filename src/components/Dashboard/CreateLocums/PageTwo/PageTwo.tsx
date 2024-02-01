import { InputLabel, TextareaAutosize } from "@mui/material";

import { ChangeEvent, useState } from "react";

const PageTwo = () => {
  const [partTwo, setPartTwo] = useState({
    description: "",
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setPartTwo({ ...partTwo, [id]: value });
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
        value={partTwo.description}
        onChange={handleInputChange}
        required
        placeholder=" Roles are ..."
        className="max-h-[100px] min-h-[80px] px-3 py-1 w-full bg-slate-100 overflow-hidden rounded-lg"
      />
    </>
  );
};

export default PageTwo;
