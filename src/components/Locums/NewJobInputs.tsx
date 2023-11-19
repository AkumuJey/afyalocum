import {
    Input,
    InputLabel,
    TextareaAutosize,
  } from "@mui/material";

  interface Props{
    handleInputChange: () => void
  }
const NewJobInputs = ({handleInputChange}: Props) => {
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
          value=""
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
          value=""
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
          value=""
          onChange={handleInputChange}
          required
          placeholder=" Roles are ..."
          className="max-h-[200px] min-h-[150px] p-3 w-full rounded-md bg-white overflow-hidden"
        />
   </>
  )
}

export default NewJobInputs