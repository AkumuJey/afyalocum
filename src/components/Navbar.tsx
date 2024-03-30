import { useState } from "react";

const LogoDiv = () => {
  return (
    <div className="logo">
      <h2 className="font-bold text-[2.5rem]">
        <span className="text-[#21573e]">locum</span>
        <span className="text-[#6c757d]">people</span>
      </h2>
    </div>
  );
};

interface NavrouteProps{
  shownav: boolean
}
const Navroutes = ( {shownav} : NavrouteProps) => {
  return (
    <div className={`navroutes ${shownav ? 'hide' : ''}`}>
      <ul className="flex flex-col gap-4 text-[1.5rem]">
        <li>
          About us
          <ul className="text-[1rem]">
            <li>About us</li>
            <li>Meet our Leadership team</li>
            <li>Join our team</li>
            <li>Awards &amp; Accreditation</li>
          </ul>
        </li>
        <li>
          Candidates
          <ul className="text-[1rem]">
            <li>Doctors</li>
            <li>Nurses</li>
          </ul>
        </li>
        <li>Vacancies</li>
        <li>
          Clients
          <ul className="text-[1rem]">
            <li>Why work with us</li>
            <li>How we support you</li>
            <li>Frameworks and contracts</li>
            <li>What our clients say</li>
          </ul>
        </li>
        <li>Latest News</li>
        <li>FAQs</li>
        <li>Resources for Locums</li>
        <li>Contact</li>
      </ul>
      <button className="text-[1.5rem] bg-[#198754] w-fit px-4 py-1 rounded-sm text-white">
        Quick Registration
      </button>
    </div>
  );
};

const Navbar = () => {
  const [shownav, setShownav] = useState<boolean>(true);
  return (
    <nav className="navbar">
      <LogoDiv />
        <div
          className="hamburger"
          onClick={() => setShownav(!shownav)}
        >
          {shownav ? 'K' : "X"}
        </div>
      <Navroutes shownav={shownav}/>
    </nav>
  );
};

export default Navbar;
