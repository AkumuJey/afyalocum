import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const Adverts = () => {
  return (
    <div className="py-4 px-[1rem] text-2xl font-semibold flex justify-between items-center">
        <p className="text-center">
          Seen a job for someone you know? Refer a friend today and earn up to
          £250!
        </p>
        <div className="flex justify-end gap-2 items-center">
          <button className="bg-[#10817A] hover:bg-teal-800 border-solid border-2 py-1 px-2 text-xl font-semibold text-white rounded-md">
            View more jobs
          </button>
          <ArrowCircleLeftIcon
            sx={{
              backgroundColor: "white",
              color: "#10817A",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          />
        </div>
      </div>
  )
}

export default Adverts