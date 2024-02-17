import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useRegistrationHooks from "../components/Registration/useRegistrationHooks";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase/firebase";
import RouterAnimation from "./RouterAnimation";

//component imports
import { LoadingButton } from "@mui/lab";
import { Paper } from "@mui/material";
import DescriptionInput from "../components/Registration/DescriptionInput";
import EmailAndPasswordInput from "../components/Registration/EmailAndPasswordInput";
import ImageUpload from "../components/Registration/ImageUpload";
import NameRegistration from "../components/Registration/NameRegistration";
import RegistrationError from "../components/Registration/RegistrationError";

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
  const { createTemporaryURL, updateHospitalsCollection, updateImageAndName } =
    useRegistrationHooks();
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
  const [error, setError] = useState(false);

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
        await updateImageAndName(user, image, name);
        await updateHospitalsCollection(user, hospitalDescription);
        navigate("/login");
      }
    } catch (_err) {
      setError(true)
    } finally {
      setLoading(false);
    }
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
            {error && <RegistrationError handleClose={() => setError(false)}/>}
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
            {error && <RegistrationError handleClose={() => setError(false)}/>}
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
