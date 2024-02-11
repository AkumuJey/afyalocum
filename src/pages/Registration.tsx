import { LoadingButton } from "@mui/lab";
import { Paper } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Navigate, useNavigate } from "react-router-dom";
import DescriptionInput from "../components/Registration/DescriptionInput";
import EmailAndPasswordInput from "../components/Registration/EmailAndPasswordInput";
import ImageUpload from "../components/Registration/ImageUpload";
import NameRegistration from "../components/Registration/NameRegistration";
import { AuthContext } from "../contexts/AuthContext";
import { auth, db, storage } from "../firebase/firebase";
import RouterAnimation from "./RouterAnimation";

interface organizationInfo {
  name: string;
  password: string;
  email: string;
  hospitalDescription: string;
  image: File | null;
}

const containerStyles = {
  width: {
    xs: "100%",
    md: "60%",
  },
  backgroundColor: "lightgray",
  padding: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  gap: "1.5rem",
};

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
    console.log(e.target)
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
    return "";
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
            sx={containerStyles}
            component="form"
            name="registration"
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
              disabled={loading}
            >
              Create Account
            </LoadingButton>
          </Paper>
        </div>
      </RouterAnimation>
    </>
  );
};

export default Resigstration;
