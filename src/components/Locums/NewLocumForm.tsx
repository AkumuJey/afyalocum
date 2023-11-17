import {
    Input,
    // Box,
    InputLabel,
    // TextareaAutosize,
    // Paper,
    // Button,
    // Avatar,
  } from "@mui/material";

const NewLocumForm = () => {
    const ariaLabel = { "aria-label": "description" };
    const handleInputChange = () => {}
  return (
    <div>
        <InputLabel
            htmlFor="name"
            sx={{
              fontWeight: "bold",
              color: "black",
              width: "100%",
            }}
          >
            Name of Organization:
          </InputLabel>
          <Input
            id="name"
            value=''
            onChange={handleInputChange}
            placeholder="Organization's Name"
            inputProps={ariaLabel}
            required
            className="w-full bg-white px-3 py-2 rounded-md overflow-hidden"
          />
    </div>
  )
}

export default NewLocumForm