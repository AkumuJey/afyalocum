interface propTypes{
    open: boolean
    onToggleClose: () => void
}
const MenuButton = ({open, onToggleClose}: propTypes) => {
  return (
      <button
        onClick={onToggleClose}
        className="text-4xl font-bold w-[4rem] md:hidden mr-[2rem]"
      >
        <i className={`icon ion-md-${open ? "close" : "menu"}`}></i>
      </button>
  );
};

export default MenuButton;
