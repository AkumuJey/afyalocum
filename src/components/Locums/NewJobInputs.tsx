import {
    Input,
    InputLabel,
    TextareaAutosize,
  } from "@mui/material";
  import PlaceIcon from '@mui/icons-material/Place';

  import { ChangeEvent } from "react";

  interface Props{
    handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    title: string,
    requirements: string, 
    description: string,
    location: string,
    rate: number | null
  }
const NewJobInputs = ({title,description, requirements, rate, location, handleInputChange}: Props) => {
    const ariaLabel = { "aria-label": "description" };
  return (
   <>
   <InputLabel
          htmlFor="title"
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
        >
          Job Title:
        </InputLabel>
        <Input
          id="title"
          value={title}
          onChange={handleInputChange}
          placeholder="Doctor, Dentist, Pharmacist etc"
          inputProps={ariaLabel}
          required
          className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
        />
        <InputLabel
          htmlFor="requirements"
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
        >
          Requirements:
        </InputLabel>
        <Input
          id="requirements"
          value={requirements}
          onChange={handleInputChange}
          placeholder="e.g. MBCHB, 2 years experience"
          inputProps={ariaLabel}
          required
          className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
        />
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
          maxRows={5}
          maxLength={150}
          id="description"
          value={description}
          onChange={handleInputChange}
          required
          placeholder=" Roles are ..."
          className="max-h-[200px] min-h-[150px] p-3 w-full rounded-md bg-white overflow-hidden"
        />
        <InputLabel
          htmlFor="location"
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
        >
          <PlaceIcon/> Location:
        </InputLabel>
        <Input
          id="location"
          value={location}
          onChange={handleInputChange}
          placeholder="e.g. Westlands Nairobi"
          inputProps={ariaLabel}
          required
          className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
        />
        <InputLabel
          htmlFor="rate"
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
        >
          Hourly Rate (KSh):
        </InputLabel>
        <Input
          id="rate"
          defaultValue={rate}
          type="number"
          onChange={handleInputChange}
          inputProps={{ min: 0, ...ariaLabel }}
          required
          className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
        />
   </>
  )
}

export default NewJobInputs