import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center valid-height py-[2rem] text-red-600">
      <Typography variant="h3" fontWeight={` bold`}>Error 404</Typography>
    </div>
  )
}

export default ErrorPage