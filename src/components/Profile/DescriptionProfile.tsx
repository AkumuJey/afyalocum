import {
  Grid,
  Typography,
  Button,
  TextareaAutosize,
  Box,
  InputLabel,
} from "@mui/material";
import { User } from "firebase/auth";
import { doc, DocumentData, getDoc, updateDoc } from "firebase/firestore";
import { useState, FormEvent, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { LoadingButton } from "@mui/lab";

interface PropTypes {
  currentUser: User;
  handleSuccess: (message: string) => void;
  handleError: (message: string) => void;
}
const DescriptionProfile = ({
  currentUser,
  handleSuccess,
  handleError,
}: PropTypes) => {
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateUserDescription = async (description: string) => {
    if (currentUser) {
      const userRef = doc(db, "hospitals", currentUser.uid);
      await updateDoc(userRef, {
        hospitalDescription: description,
      });
    }
  };

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
      console.log("Error:", _error)
    } finally {
      setLoading(false);
      setIsEditable(false);
    }
  };

  const [description, setDescription] = useState<string>("Enter your description...");
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
              Update Name
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
