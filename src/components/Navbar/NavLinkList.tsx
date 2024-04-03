import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import LargeScreenViewNavlist from "./LargeScreenViewNavlist";
import MobileViewNavlist from "./MobileViewNavlist";

interface PropTypes {
  open: boolean;
  isMd: boolean;
  handleClose: () => void;
}
const NavLinkList = ({ open, isMd, handleClose }: PropTypes) => {
  const { currentUser } = useContext(AuthContext);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    scrollToTop();
    handleClose();
  };
  return (
    <>
      {!isMd && (
        <LargeScreenViewNavlist
          scrollToTop={scrollToTop}
          currentUser={currentUser}
        />
      )}
      {isMd && (
        <MobileViewNavlist
          handleClick={handleClick}
          handleClose={handleClose}
          open={open}
          currentUser={currentUser}
        />
      )}
    </>
  );
};

export default NavLinkList;
