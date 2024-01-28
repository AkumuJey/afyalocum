import { Container } from "@mui/material";
import SponsorAndTestimonialsHeader from "./SponsorAndTestimonialsHeader";
import SponsorsAndApprovalsArrayDisplay from "./SponsorsAndApprovalsArrayDisplay";

const SponsorsAndApprovalsContainer = () => {
  const styles = {
    width: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
      xl: "85%",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
  };
  return (
    <Container sx={styles}>
      <SponsorAndTestimonialsHeader />
      <SponsorsAndApprovalsArrayDisplay />
    </Container>
  );
};

export default SponsorsAndApprovalsContainer;
