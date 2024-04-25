import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "AfyaLocum - Page  Not Found";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full p-[2rem] gap-[3rem] bg-transparent">
      <Typography variant="h5" fontWeight={` bold`} color={`red`}>
        Page not found!
      </Typography>
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
