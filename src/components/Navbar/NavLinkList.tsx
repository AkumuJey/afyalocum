import { NavLink } from "react-router-dom";


interface PropTypes {
  open: boolean;
}
const NavLinkList = ({ open }: PropTypes) => {
  return (
    <>
      <ul
       className={`${open ? '' : 'hidden md:flex'} justify-around gap-[4rem]`}
      >
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/locums'>Locums</NavLink></li>
        <li><NavLink to='/register'>About</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
      </ul>
    </>
  );
};

export default NavLinkList;
