import { useState } from "react";
import NavLinkList from "./NavLinkList";
import MenuButton from "./MenuButton";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 w-full z-[1000] flex flex-col md:flex-row justify-between items-center py-[0.5rem] px-0 md:px-[2rem] bg-slate-100 h-[5rem] box-border">
      <div className="flex justify-between w-full">
        <h2 className="font-bold text-[2.5rem] text-center px-[2rem] md:p-0">
          <span className="text-[#21573e]">afya</span>
          <span className="text-[#6c757d]">locum</span>
        </h2>
        <MenuButton onToggleClose={() => setOpen(!open)} open={open} />
      </div>
      <NavLinkList open={open} />
    </nav>
  );
};

export default Navbar;
