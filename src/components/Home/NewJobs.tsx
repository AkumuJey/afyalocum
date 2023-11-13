import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PlaceIcon from '@mui/icons-material/Place';


const TopJobs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: 3,
        maxWidth: { xs: '100%', lg: '33%' },
        "& > :not(style)": {
          m: 1,
          maxWidth: '100%',
          height: "auto",
        },
      }}
    >
      <Paper elevation={2}>
        <div className="w-full h-full bg-teal-100 p-3">
          <h3 className="py-3"><PlaceIcon />Buckinghamshire, South East</h3>
          <h2 className="font-bold text-teal-800 text-2xl py-3">
            Gastroenterology Consultant – Buckinghamshire
          </h2>
          <div>
            <p>
              <b>Speciality:</b> Medicine - Gastroenterology
            </p>
            <p>
              <b>Grade:</b> Medical Officer
            </p>
            <p>
              <b>Duration:</b> 6 months
            </p>
            <p>
              <b>Ref:</b> #15528
            </p>
          </div>
          <button className="bg-[#10817A] hover:bg-teal-800 border-solid border-2 w-full py-2 my-3 mx-auto text-xl font-semibold text-white rounded-md">
            More info
          </button>
        </div>
      </Paper>
    </Box>
  );
};

export default TopJobs;
