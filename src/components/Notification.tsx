import { Notifications } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

interface Props {
  count: number;
}
const Notification = ({ count }: Props) => {
  return (
    <>
      <IconButton
        sx={{
          position: "fixed",
          top: '5rem',
          right: 16,
          zIndex: 50
        }}
      >
        <Badge badgeContent={count} color="success">
          <Notifications />
        </Badge>
      </IconButton>
    </>
  );
};

export default Notification;
