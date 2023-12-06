import {
  Grid,
  Avatar,
  MenuList,
  MenuItem,
  Button,
  Paper,
  Popper,
  ClickAwayListener,
  Grow,
  Skeleton,
} from "@mui/material";
import {
  SyntheticEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, User} from "firebase/auth";

const UserAvatar = () => {
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
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const navigate = useNavigate();
  const signOut = async () => {
    try {
      await auth.signOut();
      navigate("/login");
      // Redirect or perform any other action after sign-out if needed
    } catch (error) {
      // Handle sign-out error
      console.error("Error signing out:", error);
    }
    setOpen(false); // Close the menu after sign-out
  };

  
  const [userDetails, setUserDetails] = useState<User | null>(null);
  
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);

          // User is signed in.
          // Access the user's information here
          setUserDetails(user);
          console.log(userDetails);
          console.log(userDetails?.displayName)
        } else {
          // User is signed out.
          setUserDetails(null);
        }
      });
    };
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Grid>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {userDetails && userDetails.photoURL ? (
            <Avatar
              alt="Logo"
              src={userDetails.photoURL}
              sx={{ width: "3rem", height: "3rem" }}
            />
          ) : (
            <Skeleton variant="circular" width={`3rem`} height={`3rem`} animation="wave"/>
          )}
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

export default UserAvatar;
