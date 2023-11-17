import {
    Input,
    // Box,
    InputLabel,
    // TextareaAutosize,
    // Paper,
    // Button,
    // Avatar,
  } from "@mui/material";
  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
const NewLocumForm = () => {
    const ariaLabel = { "aria-label": "description" };
    const handleInputChange = () => {}
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MultiInputDateTimeRangeField ']}>
      <MultiInputDateTimeRangeField
          slotProps={{
            textField: ({ position }) => ({
              label: position === 'start' ? 'Check-in' : 'Check-out',
            }),
          }}
        />
      </DemoContainer>
      </LocalizationProvider>
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