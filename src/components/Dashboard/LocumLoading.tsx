import { Skeleton } from "@mui/material";

const LocumLoading = () => {
    const skeletonArray = new Array(8).fill("Skeleton");
  return (
    <>
      <div className="flex flex-col gap-[0.1px] w-[90%] md:w-[40%] m-[1.5rem]">
        <Skeleton variant="text" animation="wave" sx={{ fontSize: "2rem" }} />
        {skeletonArray.map((skeleton, index) => (
            <Skeleton variant="text" animation="wave" key={index + skeleton}/>
        ))}
        <div className="flex justify-between py-[0.5rem]">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={`5rem`}
            height={`2rem`}
            sx={{ borderRadius: 1 }}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={`5rem`}
            height={`2rem`}
            sx={{ borderRadius: 1 }}
          />
        </div>
      </div>
    </>
  );
};

export default LocumLoading;
