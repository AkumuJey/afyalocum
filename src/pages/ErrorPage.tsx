import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  return (
    <div>
      Error 404
    </div>
  )
}

export default ErrorPage