import { ChangeEvent } from "react";
import {
    InputLabel,
    TextareaAutosize,
  } from "@mui/material";

interface Props {
    description: string
    handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const DescriptionInput = ({description, handleInputChange} : Props) => {
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
            Describe the Hospital:
          </InputLabel>
          <TextareaAutosize
            maxRows={5}
            maxLength={200}
            id="description"
            autoComplete="off"
            value={description}
            onChange={handleInputChange}
            required
            placeholder="Describe Your Hospital"
            className="max-h-[200px] min-h-[150px] bg-gray-200 p-3 w-full overflow-hidden"
          />
    </>
  )
}

export default DescriptionInput