import { ChangeEvent, FormEvent, useState } from "react";

//component imports
import { LoadingButton } from "@mui/lab";
import { Paper } from "@mui/material";
import DescriptionInput from "./DescriptionInput";
import EmailAndPasswordInput from "./EmailAndPasswordInput";
import ImageUpload from "./ImageUpload";
import NameRegistration from "./NameRegistration";
import RegistrationError from "./RegistrationError";
import SuccessfulRegistrationModal from "./SuccessfulRegistrationModal";
import useRegistrationHooks, { organizationInfo } from "./useRegistrationHooks";

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

const RegistrationFormLayout = () => {
  const { handleRegistrationAndVerificationLink } = useRegistrationHooks();

  // States involved
  const [organizationInfo, setOrganizationInfo] = useState<organizationInfo>({
    name: "",
    password: "",
    email: "",
    hospitalDescription: "",
    image: null,
  });
  const [take, setTake] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setOrganizationInfo({ ...organizationInfo, [id]: value });
  };

  const createTemporaryURL = (image: File | null) => {
    if (image) {
      return URL.createObjectURL(image);
    }
    return "";
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleRegistrationAndVerificationLink(organizationInfo);
      setSuccess(true);
    } catch (_err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SuccessfulRegistrationModal
        open={success}
        handleClose={() => setSuccess(true)}
      />
      <div className="flex justify-center items-center w-full h-full my-[2rem]">
        <Paper
          elevation={3}
          sx={containerStyles}
          component="form"
          name="registration"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {error && <RegistrationError handleClose={() => setError(false)} />}
          <ImageUpload
            image={createTemporaryURL(organizationInfo.image)}
            disabled={loading}
            handleImageChange={handleImageChange}
            handleRetake={handleRetake}
            take={take}
          />
          <NameRegistration
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
            handleInputChange={handleInputChange}
          />
          {error && <RegistrationError handleClose={() => setError(false)} />}
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={loading}
            disabled={loading || success}
          >
            Create Account
          </LoadingButton>
        </Paper>
      </div>
    </>
  );
};

export default RegistrationFormLayout;
