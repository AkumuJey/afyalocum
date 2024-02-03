import { Button, Container, Input, InputLabel } from "@mui/material"

interface PropTypes{
    sendLink: () => void
}
const AwaitingVerification = ({sendLink}: PropTypes) => {
  return (
    <><Container component={`form`} onSubmit={sendLink}>
    <InputLabel
      htmlFor="email"
      sx={{
        fontWeight: "bold",
        color: "black",
        width: "100%",
      }}
    >
      Email
    </InputLabel>
    <Input
      id="email"
      name="email"
      autoComplete="off"
      required
      sx={{
        width: "100%",
        backgroundColor: "white",
        px: "0.5rem",
        py: "0.2rem",
        mb: "1rem",
      }}
    />
    <Button
      type="submit"
      color="primary"
      variant="contained"
      sx={{ width: "100%" }}
      style={{ textTransform: "none" }}
    >
      Recover Password
    </Button>
  </Container></>
  )
}

export default AwaitingVerification