import { Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'


const RecoverAndCreateAccount = () => {
  return (
    <><Container
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Button style={{ textTransform: "none" }} type="button">
      <Link to={`/register`}>Create Account</Link>
    </Button>
    <Button style={{ textTransform: "none" }} type="button">
      <Link to={`/recover-password`}>Forgot Password</Link>
    </Button>
  </Container></>
  )
}

export default RecoverAndCreateAccount