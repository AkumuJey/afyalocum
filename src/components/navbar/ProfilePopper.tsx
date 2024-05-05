import {
  Button,
  ClickAwayListener,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useProfileEssensitials from "../../hooks/useProfileEssensitials";
import HospitalAvatar from "./HospitalAvatar";

const ProfilePopper = () => {
  const { handleToggle, handleListKeyDown, handleClose, handleSignOut, open } =
    useProfileEssensitials();
  const anchorRef = useRef<HTMLButtonElement>(null);
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Grid sx={{ mr: "1.5rem" }}>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <HospitalAvatar />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    aria-aria-labelledby="composition-button"
                    id="composition-menu"
                    onKeyDown={() => handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to={`/profile`}>Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </>
  );
};

export default ProfilePopper;
