import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Paper,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import ImageUpload from "../components/registration/ImageUpload";
import NameRegistration from "../components/registration/NameRegistration";
import DescriptionInput from "../components/registration/DescriptionInput";
import EmailAndPasswordInput from "../components/registration/EmailAndPasswordInput";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db} from "../firebase/firebase"
import { doc, setDoc,} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

interface organizationInfo {
  name: string
  password: string
  email: string
  hospitalDescription: string
  image: string
}
const Resigstration = () => {
  const [organizationInfo, setOrganizationInfo] = useState<organizationInfo>({
    name: "",
    password: "",
    email: "",
    hospitalDescription: "",
    image: "",
  });
 
  const ariaLabel = { "aria-label": "description" };
  const [take, setTake] = useState(true); 
  const [loading, setLoading] = useState(false); 

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setOrganizationInfo({ ...organizationInfo, [id]: value });
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setOrganizationInfo({
      ...organizationInfo,
      image: URL.createObjectURL(e.target.files[0]),
    });
    setTake(false);
  };

  const handleRetake = () => {
    setTake(!take);
  };
  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    console.log("Submitted", organizationInfo);
    const {email, password, name, hospitalDescription, image} = organizationInfo
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await updateProfile(user, {
          displayName: name,
          photoURL: image,
        })
      }
      const userRef = doc(db, "hospitals", user.uid)
      await setDoc(userRef, {
        hospitalDescription
      }).then(() => navigate("/login"))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-full py-0 md:py-[2rem]">
      <Paper
        elevation={3}
        sx={{
          width: {
            xs: "100%",
            md: "60%",
          },
          backgroundColor: "lightgray",
          padding: 3,
        }}
      >
        <Box
          component="form"
          name="registration"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            gap: "1.5rem",
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <ImageUpload
            handleImageChange={handleImageChange}
            image={organizationInfo.image}
            handleRetake={handleRetake}
            take={take}
          />
          <NameRegistration
            ariaLabel={ariaLabel}
            handleInputChange={handleInputChange}
            name={organizationInfo.name}
          />
          <DescriptionInput
            description={organizationInfo.hospitalDescription}
            handleInputChange={handleInputChange}
          />
          <EmailAndPasswordInput
            email={organizationInfo.email}
            password={organizationInfo.password}
            ariaLabel={ariaLabel}
            handleInputChange={handleInputChange}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={loading}
          >
            Create Account
          </LoadingButton>
        </Box>
      </Paper>
    </div>
  );
};

export default Resigstration;
