import { Container, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const LinkSent = () => {
  return (
    <>
      <Container
        component={`div`}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Typography variant={`h5`} textAlign={`center`}>
          Password recovery link sent to email
        </Typography>
        <CheckCircleOutlineIcon
          sx={{
            mx: "auto",
            borderRadius: "100%",
            fontSize: "3rem",
          }}
        />
      </Container>
    </>
  );
};

export default LinkSent;
