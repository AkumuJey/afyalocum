import {
  Grid,
  Typography,
  Button,
  TextareaAutosize,
  Box,
  InputLabel,
} from "@mui/material";
import { useState, FormEvent } from "react";

const DescriptionProfile = () => {
  const [isEditable, setIsEditable] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setIsEditable(false);
    console.log(data);
  };
  const para =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit adipisci asperiores porro, accusamus ipsa vitae enim impedit provident dolorem eveniet praesentium quaerat ad inventore libero cupiditate consequatur nostrum quisquam eligendi!";
  return (
    <>
      {!isEditable && (
        <Grid container justifyContent={`space-between`} spacing={2}>
          <Grid item>
            <Typography fontWeight={`bold`}>Description: </Typography>
            <Typography>{para}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => setIsEditable(true)} variant="contained">
              Edit
            </Button>
          </Grid>
        </Grid>
      )}

      {isEditable && (
        <Box
          component={`form`}
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <Box component={`div`} sx={{ width: "100%" }}>
            <InputLabel
              htmlFor="description"
              sx={{
                fontWeight: "bold",
                color: "black",
                width: "100%",
                textAlign: "left",
              }}
            >
              Description
            </InputLabel>
            <TextareaAutosize
              maxRows={5}
              maxLength={200}
              id="description"
              name="description"
              autoComplete="off"
              required
              placeholder="Describe Your Hospital"
              className="max-h-[200px] min-h-[150px] p-3 w-full overflow-hidden"
            />
          </Box>
          <Box
            component={`div`}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
              width: "100%",
            }}
          >
            <Button type="submit" color="primary" variant="contained">
              Save
            </Button>
            <Button
              type="button"
              color="secondary"
              onClick={() => setIsEditable(false)}
              variant="outlined"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DescriptionProfile;
