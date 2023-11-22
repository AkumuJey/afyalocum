import * as React from "react";
import { useState } from "react";
import NavLinkList from "./NavLinkList";
import MenuButton from "./MenuButton";
import { AppBar, Grid, Slide, useScrollTrigger } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
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
            paddingBottom: 1,
            paddingTop: 1,
            transition: "all",
            transitionDuration: 200,
            transitionProperty: "ease"
          }}
        >
          <Grid container justifyContent={`space-between`}>        
            <h2 className="font-bold text-[2.5rem] text-center px-[2rem] md:p-0">
              <span className="text-[#21573e]">afya</span>
              <span className="text-[#6c757d]">locum</span>
            </h2>
            <MenuButton onToggleClose={() => setOpen(!open)} open={open} />
          </Grid>
          <NavLinkList open={open} />
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
