import { useState } from "react";
import NavLinkList from "./NavLinkList";
import MenuButton from "./MenuButton";
import ContactsAndResources from "./ContactsAndResources";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar relative flex flex-col md:flex-row justify-between box-border items-center md:flex-wrap w-full bg-white mb-5">
      <ContactsAndResources open={open}/>
      <div className="flex flex-col w-full md:flex-row justify-between items-center">
        <div className="logo pl-[1rem] md:pl-[4rem] flex justify-between w-full md:w-auto">
          <h2 className="font-bold text-[2.5rem] text-center">
            <span className="text-[#21573e]">locum</span>
            <span className="text-[#6c757d]">people</span>
          </h2>
          <MenuButton onToggleClose={() => setOpen(!open)} open={open} />
        </div>
        <NavLinkList open={open}/>
      </div>
    </nav>
  );
};

export default Navbar;
