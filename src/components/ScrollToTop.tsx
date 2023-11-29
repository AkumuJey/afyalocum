import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Fade in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: {
            xs: 16,
            md: 32,
          },
          borderRadius: "100%",
        }}
      >
        <Fab
          size="small"
          aria-label="Scroll back to top"
          onClick={handleclick}
          sx={{
            "&:hover": {
              // Change background color on hover
              "&:after": {
                content: '"Scroll to Top"',
                position: "absolute",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "black", // Label text color
                fontSize: "1rem",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                backgroundColor: "transparent",
              },
            },
          }}
          style={{ textTransform: "none" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
