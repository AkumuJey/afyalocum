import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
interface propTypes{
  open: boolean
    onToggleClose: () => void
}

const Content = ({open} : {open: boolean}) => {
  if (open) {
    return <CloseIcon/>
  } else {
    return <MenuIcon />
  }
}
const MenuButton = ({open, onToggleClose}: propTypes) => {
  return (
      <button
        onClick={onToggleClose}
        className="text-4xl font-bold w-[4rem] md:hidden"
      >
        <Content open={open}/>
      </button>
  );
};

export default MenuButton;
