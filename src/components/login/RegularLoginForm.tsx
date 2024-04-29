import { Container, Paper } from "@mui/material";
import useRegularLogin from "../../hooks/useRegularLogin";
import EmailInput from "./EmailInput";
import FormHeader from "./FormHeader";
import LoginError from "./LoginError";
import PasswordInput from "./PasswordInput";
import RecoverAndCreateAccount from "./RecoverAndCreateAccount";
import SubmitAndLoadButton from "./SubmitAndLoadButton";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  width: "95%",
  maxWidth: "400px",
  minHeight: "300px",
  padding: "0.5rem",
  mx: "auto",
  my: "auto",
};
const formStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

interface PropTypes {
  handleLoading: (decide: boolean) => void;
  loading: boolean;
  handleUnverified:  () => void;
}
const RegularLoginForm = ({ handleLoading, loading, handleUnverified }: PropTypes) => {
  const { error, spinner, handleSignin, handleClose } =
    useRegularLogin(handleLoading, handleUnverified);

  return (
    <>
      <Paper component={`div`} aria-required sx={containerStyles}>
        <Container
          component={`form`}
          sx={formStyles}
          name="login"
          onSubmit={handleSignin}
        >
          <FormHeader />
          <EmailInput loading={loading} />
          <PasswordInput loading={loading} />
          <SubmitAndLoadButton loading={loading} spinner={spinner} />
        </Container>
        {error && <LoginError handleClose={handleClose} />}
        <RecoverAndCreateAccount />
      </Paper>
    </>
  );
};

export default RegularLoginForm;
