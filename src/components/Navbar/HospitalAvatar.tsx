import { Avatar, Skeleton } from "@mui/material";
import { User } from "firebase/auth";
import useAuthStatus from "../../hooks/useAuthStatus";

const HospitalAvatar = () => {
  const currentUser: User | null = useAuthStatus();
  const { photoURL } = currentUser as User;
  if (!currentUser) {
    return (
      <Skeleton
        variant="circular"
        width={`3rem`}
        height={`3rem`}
        animation="wave"
        color="red"
      />
    );
  }
  return (
    <>
      <Avatar
        alt="Logo"
        src={photoURL as string}
        sx={{ width: "3rem", height: "3rem" }}
      />
    </>
  );
};

export default HospitalAvatar;
