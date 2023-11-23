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
          right: 16,
          borderRadius: "100%",
          overflow: "hidden",
        }}
      >
        <Fab size="small" aria-label="Scroll back to top" onClick={handleclick}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
