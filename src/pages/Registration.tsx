import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Box, Paper } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import ImageUpload from "../components/registration/ImageUpload";
import NameRegistration from "../components/registration/NameRegistration";
import DescriptionInput from "../components/registration/DescriptionInput";
import EmailAndPasswordInput from "../components/registration/EmailAndPasswordInput";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import { ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { AuthContext } from "../contexts/AuthContext";
import RouterAnimation from "./RouterAnimation";

interface organizationInfo {
  name: string;
  password: string;
  email: string;
  hospitalDescription: string;
  image: File | null;
}
const Resigstration = () => {
  const [organizationInfo, setOrganizationInfo] = useState<organizationInfo>({
    name: "",
    password: "",
    email: "",
    hospitalDescription: "",
    image: null,
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
      image: e.target.files[0],
    });
    setTake(false);
  };

  const handleRetake = () => {
    setTake(!take);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitted", organizationInfo);
    const { email, password, name, hospitalDescription, image } =
      organizationInfo;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user && image) {
        // Upload image to Firebase Storage
        const storageRef = ref(storage, `images/${user.uid}`);
        await uploadBytes(storageRef, image);

        // Get image download URL
        const downloadUrl = await getDownloadURL(storageRef);

        // Update user profile with name and photoURL
        await updateProfile(user, {
          displayName: name,
          photoURL: downloadUrl,
        });

        const userRef = doc(db, "hospitals", user.uid);
        await setDoc(userRef, {
          hospitalDescription,
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createTemporaryURL = (image: File | null) => {
    if (image) {
      return URL.createObjectURL(image);
    }
    return ""; // Return an empty string if no image is present
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to={`/`} replace={true} />;
  }
  return (
    <>
      <RouterAnimation>
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
                image={createTemporaryURL(organizationInfo.image)}
                disabled={loading}
                handleImageChange={handleImageChange}
                handleRetake={handleRetake}
                take={take}
              />
              <NameRegistration
                ariaLabel={ariaLabel}
                handleInputChange={handleInputChange}
                name={organizationInfo.name}
                disabled={loading}
              />
              <DescriptionInput
                description={organizationInfo.hospitalDescription}
                handleInputChange={handleInputChange}
                disabled={loading}
              />
              <EmailAndPasswordInput
                email={organizationInfo.email}
                password={organizationInfo.password}
                disabled={loading}
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
      </RouterAnimation>
    </>
  );
};

export default Resigstration;
