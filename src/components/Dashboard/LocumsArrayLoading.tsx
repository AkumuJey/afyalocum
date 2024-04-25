import { Skeleton } from "@mui/material";

const LocumLoading = () => {
  return (
    <>
      {Array(3)
        .fill("key")
        .map((item, index) => (
          <>
            <Skeleton
              variant="rectangular"
              sx={{
                width: { xs: "100%", md: "30%" },
                height: 180,
                borderRadius: 3,
              }}
              key={`${item + index}`}
            />
          </>
        ))}
    </>
  );
};

export default LocumLoading;
