import { Link } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
interface PropTypes{
  content: string
}
const VerificationSentComponent = ({ content }: PropTypes) => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: "95%",
          maxWidth: "500px",
          mx: "auto",
          background: "#DDD0C8",
        }}
      >
        <div className="text-center">
          <Typography variant="h6">{
            `${content} Link to Your email.`
          }</Typography>
          <Typography variant="h6">Please check your inbox.</Typography>
        </div>
        <div className="mt-4 flex justify-evenly">
          <Link
            to={`/`}
            className="py-[0.5rem] px-[1.5rem] rounded-md bg-teal-600 hover:bg-teal-800 hover:text-white font-semibold text-xl"
          >
            Home
          </Link>
          <Link
            to={`/login`}
            className="py-[0.5rem] px-[1.5rem] rounded-md bg-purple-600 hover:bg-purple-900 hover:text-white font-semibold text-xl"
          >
            Login
          </Link>
        </div>
      </Paper>
    </>
  );
};

export default VerificationSentComponent;
