import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  };
  return (
    <Fade in={trigger}>
      <Box
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, borderRadius: '100%', overflow: 'hidden' }}
      >
        <button className="bg-slate-400 w-full h-full flex justify-center items-center" onClick={handleclick}>
          <ArrowCircleUpIcon sx={{color: 'white', fontSize: '3rem'}}/>
        </button>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
