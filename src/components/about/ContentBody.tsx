import { Typography } from "@mui/material";
interface PropTypes {
  body: string;
}
const ContentBody = ({ body }: PropTypes) => {
  return (
    <Typography
      paragraph
      component="p"
      sx={{
        width: "100%",
        fontSize: "1rem",
        lineHeight: 1.5,
      }}
    >
      {body}
    </Typography>
  );
};

export default ContentBody;
