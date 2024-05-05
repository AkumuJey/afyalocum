import { Box } from "@mui/material";

import useProfileImageUpdate from "../../hooks/useProfileImageUpdate";
import ProfileAvatarDisplay from "./ProfileAvatarDisplay";
import ProfileAvatarForm from "./ProfileAvatarForm";

interface PropTypes {
  handleError: (msg: string) => void;
  handleSuccess: (msg: string) => void;
}
const AvatarProfile = ({ handleSuccess, handleError }: PropTypes) => {
  const { isEditable, disableEditing, enableEditing } = useProfileImageUpdate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {!isEditable && <ProfileAvatarDisplay enableEditing={enableEditing} />}
      {isEditable && (
        <ProfileAvatarForm
          handleError={handleError}
          handleSuccess={handleSuccess}
          disableEditing={disableEditing}
        />
      )}
    </Box>
  );
};

export default AvatarProfile;
