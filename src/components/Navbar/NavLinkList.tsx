import { NavLink } from "react-router-dom";


interface PropTypes {
  open: boolean;
}
const NavLinkList = ({ open }: PropTypes) => {
  return (
    <>
      <ul
       className={`${open ? 'top-[5rem] bottom-0 left-0 right-0 bg-white w-full h-full translate-x-0 transition-all duration-200 ease-linear' : 'hidden fixed translate-x-full md:translate-x-0 transition-all duration-200 ease-linear md:static md:flex'} justify-around gap-[4rem] font-bold text-xl`}
      >
        <li><NavLink to='/' className={({isActive}) => isActive ? 'text-purple-800' : ''}>Home</NavLink></li>
        <li><NavLink to='/locums' className={({isActive}) => isActive ? 'text-purple-800' : ''}>Locums</NavLink></li>
        <li><NavLink to='/about' className={({isActive}) => isActive ? 'text-purple-800' : ''}>About</NavLink></li>
        <li><NavLink to='/register' className={({isActive}) => isActive ? 'text-purple-800' : ''}>Register</NavLink></li>
      </ul>
    </>
  );
};

export default NavLinkList;
