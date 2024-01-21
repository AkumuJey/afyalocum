import { CircularProgress } from "@mui/material";

const LoadingPage = () => {
  return (
    <div
      className={`flex justify-center items-center min-h-screen w-full py-[4rem] dark:bg-black bg-slate-700`}
    >
      <CircularProgress size={50} />
    </div>
  );
};

export default LoadingPage;
