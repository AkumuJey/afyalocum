import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { User } from "firebase/auth";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import useProfileUpdate from "../../hooks/useProfileUpdate";

interface PropTypes {
  currentUser: User;
}
const DescriptionProfile = ({
  currentUser,
}: PropTypes) => {
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);

  const { updateUserDescription, handleSuccess, handleError } = useProfileUpdate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const { description } = data;
      await updateUserDescription(description as string);
      handleSuccess("Hospital description updated successfully");
    } catch (_error) {
      handleError("Error updating description");
    } finally {
      setLoading(false);
      setIsEditable(false);
    }
  };

  const [description, setDescription] = useState<string>(
    "Enter your description..."
  );
  useEffect(() => {
    const fetchDescription = async () => {
      const userRef = doc(db, "hospitals", currentUser.uid);
      const userDescription = await getDoc(userRef);
      const descriptionData = userDescription.data();
      const { hospitalDescription } = descriptionData as DocumentData;
      setDescription(hospitalDescription as string);
    };
    fetchDescription();
  });
  return (
    <>
      {!isEditable && (
        <Grid container justifyContent={`space-between`} spacing={2}>
          <Grid item>
            <Typography fontWeight={`bold`}>Description: </Typography>
            <Typography>{description}</Typography>
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
              defaultValue={description}
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
            <LoadingButton
              type="submit"
              variant="contained"
              color="secondary"
              loading={loading}
              disabled={loading}
            >
              Update Description
            </LoadingButton>
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
