import { useState } from "react";
import NavLinkList from "./NavLinkList";
import MenuButton from "./MenuButton";
import {
  AppBar,
  Typography,
  Grid,
  Slide,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            display: "flex",
            flexDirection: isMd ? "column" : "row",
            alignItems: "center",
            backgroundColor: "lightgray",
            transition: "all",
            transitionDuration: 200,
            transitionProperty: "ease",
          }}
        >
          <Grid container justifyContent={`space-between`}>
            <Typography
              component={`h2`}
              sx={{
                textAlign: "center",
                padding: "0 2rem 0 2rem",
              }}
            >
              <Typography
                component={`span`}
                className="text-[`#21573e`]"
                sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
              >
                afya
              </Typography>
              <Typography
                component={`span`}
                className="text-[#6c757d]"
                sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
              >
                locum
              </Typography>
            </Typography>
            <MenuButton onToggleClose={() => setOpen(!open)} open={open} />
          </Grid>
          <NavLinkList
            open={open}
            isMd={isMd}
            handleClose={() => setOpen(false)}
          />
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
