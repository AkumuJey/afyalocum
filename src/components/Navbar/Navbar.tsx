import * as React from "react";
import { useState } from "react";
import NavLinkList from "./NavLinkList";
import MenuButton from "./MenuButton";
import {
  AppBar,
  Typography,
  Grid,
  Slide,
  useScrollTrigger,
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

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "lightgray",
            padding: '0.5rem',
            transition: "all",
            transitionDuration: 200,
            transitionProperty: "ease",
          }}
        >
          <Grid container justifyContent={`space-between`}>
            <Typography
              component={`h2`}
              sx={{
                fontWeight: 'bold',
                fontSize: '2.5rem',
                textAlign: 'center',
                padding: "0 2rem 0 2rem"
              }}
            >
              <span className="text-[#21573e]">afya</span>
              <span className="text-[#6c757d]">locum</span>
            </Typography>

            <MenuButton onToggleClose={() => setOpen(!open)} open={open} />
          </Grid>
          <NavLinkList open={open} />
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
