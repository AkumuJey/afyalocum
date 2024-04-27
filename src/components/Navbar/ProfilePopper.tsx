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
import {
  KeyboardEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import HospitalAvatar from "./HospitalAvatar";

const ProfilePopper = () => {
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
 
  const navigate = useNavigate();
  const signOut = async () => {
    await auth.signOut();
    navigate("/login");
    setOpen(false);
  };

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
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to={`/profile`}>Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={signOut}>Logout</MenuItem>
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
