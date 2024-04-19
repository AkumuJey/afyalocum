import { Button, Typography } from "@mui/material";
import {
  useNavigate,
  useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center valid-height p-[2rem] gap-[3rem]">
      <Typography variant="h5" fontWeight={` bold`} color={`red`}>
        Error 404
      </Typography>
      <div className="flex justify-around w-full">
        <Button
          onClick={() => navigate("/")}
          type="button"
          variant="contained"
          color="success"
        >
          Home
        </Button>
        <Button
          onClick={() => navigate(-1)}
          type="button"
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
