import { Box } from "@mui/material";

import useProfileImageUpdate from "../../hooks/useProfileImageUpdate";
import ProfileAvatarDisplay from "./ProfileAvatarDisplay";
import ProfileAvatarForm from "./ProfileAvatarForm";

const AvatarProfile = () => {
  const {
    isEditable,
    disableEditing,
    enableEditing,
  } = useProfileImageUpdate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {!isEditable && <ProfileAvatarDisplay enableEditing={enableEditing} />}
      {isEditable && (
        <ProfileAvatarForm
          disableEditing={disableEditing}
        />
      )}
    </Box>
  );
};

export default AvatarProfile;
