import { Alert } from "@mui/material"
interface PropTypes{
    handleClose: () => void
}
const RegistrationError = ({handleClose}: PropTypes) => {
  return (
    <>
    <Alert severity="error" onClose={handleClose} sx={{mx: "auto"}}>Error Occured Try again.</Alert>
    </>
  )
}

export default RegistrationError