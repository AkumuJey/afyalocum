import { Typography } from "@mui/material";
interface Proptypes {
  title: string;
}
const ContentHeader = ({ title }: Proptypes) => {
  return (
    <Typography
      variant="h4"
      align="center"
      sx={{
        fontWeight: 600,
        marginBottom: 1,
      }}
    >
      {title}
    </Typography>
  );
};

export default ContentHeader;
