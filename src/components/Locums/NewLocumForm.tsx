import {
  Input,
  Box,
  InputLabel,
  TextareaAutosize,
  Button,
  Paper,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const NewLocumForm = () => {
  const ariaLabel = { "aria-label": "description" };
  const handleInputChange = () => {};

  const today = dayjs()
  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          xs: "80%",
          md: "60%",
          marginLeft: "auto",
          marginRight: "auto",
        },
        backgroundColor: "lightgray",
        padding: 3,
      }}
    >
      <Box
        component="form"
        sx={{
          width: "100%",
        }}
      >
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
          htmlFor="description"
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
        >
          Job Description:
        </InputLabel>
        <Input
          id="description"
          value=""
          onChange={handleInputChange}
          placeholder="Roles are ..."
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
        <TextareaAutosize
          maxRows={5}
          maxLength={150}
          id="requirements"
          value=""
          onChange={handleInputChange}
          required
          placeholder="e.g. MBCHB, 2 years experience"
          className="max-h-[200px] min-h-[150px] p-3 w-full rounded-md bg-white overflow-hidden"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DateTimePicker"]}
            sx={{  display: "flex", flexDirection: "column", paddingBottom: 2, paddingTop: 2 }}
          >
            <DateTimePicker
              label="Start date and time"
              sx={{ backgroundColor: "white", borderRadius:1 }}
              defaultValue={today}
              disablePast
            />
            <DateTimePicker
              label="End date and time"
              sx={{ backgroundColor: "white", borderRadius:1}}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default NewLocumForm;
