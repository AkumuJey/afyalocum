import { LoadingButton } from "@mui/lab";
import { Paper } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import NotificationElement from "../NotificationElement";
import DescriptionInput from "./DescriptionInput";
import EmailAndPasswordInput from "./EmailAndPasswordInput";
import ImageUpload from "./ImageUpload";
import NameRegistration from "./NameRegistration";
import RegistrationError from "./RegistrationError";
import useRegistrationHooks, { organizationInfo } from "./useRegistrationHooks";

type Severity = "success" | "error";

interface PropTypes {
  notifyVerificationSent: () => void
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

const RegistrationFormLayout = ({ notifyVerificationSent } : PropTypes) => {
  const { handleRegistration } = useRegistrationHooks();

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<Severity>("success");
  const [message, setMessage] = useState("");

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

  const validPassword = organizationInfo.password.trim().length > 7;

  //Modifying hcnages in the input fields
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setOrganizationInfo({ ...organizationInfo, [id]: value });
  };

  //creating url for uploaded image
  const createTemporaryURL = (image: File | null) => {
    if (image) {
      return URL.createObjectURL(image);
    }
    return "";
  };

  //handling image change
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setOrganizationInfo({
      ...organizationInfo,
      image: e.target.files[0],
    });
    setTake(false);
  };

  //Trying different images
  const handleRetake = () => {
    setTake(!take);
  };

  const notifySuccess = () => {
    setMessage("Registration Successful.");
    setSeverity("success");
    setOpen(true);
  };
  //Registration function.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleRegistration(organizationInfo);
      notifySuccess();
      setTimeout(() => {
        notifyVerificationSent()
      }, 2000)
    } catch (_err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NotificationElement
        handleClose={() => setOpen(false)}
        open={open}
        severity={severity}
        message={message}
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
            validPassword={validPassword}
            handleInputChange={handleInputChange}
          />
          {error && <RegistrationError handleClose={() => setError(false)} />}
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={loading}
            disabled={loading || open || !validPassword}
          >
            Create Account
          </LoadingButton>
        </Paper>
      </div>
    </>
  );
};

export default RegistrationFormLayout;
