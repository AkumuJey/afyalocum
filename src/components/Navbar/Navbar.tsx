const Navbar = () => {
  return (
    <div className="navbar flex justify-between box-border items-center flex-wrap">
      <div className="w-full bg-slate-100 shadow-sm shadow-black py-2 px-[4rem]">
        <ul className="flex justify-end gap-[3rem]">
          <li>Latest News</li>
          <li>FAQs</li>
          <li>Resources for Locums</li>
          <li className="flex gap-[3rem]">
            <h4>Contact</h4>
            <ul className="flex gap-[2rem]">
                <li><i className="icon ion-md-call"></i>+254701439136</li>
                <li><i className="icon ion-md-mail"></i></li>
                <li><i className="icon ion-md-medkit"></i></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="logo pl-[4rem]">
        <h2 className="font-bold text-[2.5rem] text-center">
          <span className="text-[#21573e]">locum</span>
          <span className="text-[#6c757d]">people</span>
        </h2>
      </div>
      <div className="links flex items-center text-[1.2rem] font-medium gap-[3rem] py-7 pr-[4rem]">
        <ul className="flex justify-evenly gap-[3rem] items-center">
          <li className="dropdown relative">
            <h3>About us</h3>
            <ul className="">
              <li>About us</li>
              <li>Meet our Leadership team</li>
              <li>Join our team</li>
              <li>Awards &amp; Accreditation</li>
            </ul>
          </li>
          <li className="dropdown relative">
            <h3>Candidates</h3>
            <ul className="text-[1rem]">
              <li className="flex gap-2">
                <ul className="min-w-[10rem]">
                  <h5>Doctors</h5>
                  {/* Hidden in mobile view */}
                  <ul className="hidden md:block">
                  <li>How we support you</li>
                  <li>Open days</li>
                  <li>Refer a friend</li>
                  <li>How you get paid</li>
                  <li>What our Doctors say</li>
                  <li>Republic of Ireland</li>
                  </ul>
                </ul>
                <ul className="min-w-[10rem]">
                  <h5>Nurses</h5>
                  {/* Hidden on mobile view */}
                  <ul className="hidden md:block">
                    <li>How we support you</li>
                    <li>Open days</li>
                    <li>Refer a friend</li>
                    <li>How you get paid</li>
                    <li>What our Doctors say</li>
                    <li>Republic of Ireland</li>
                  </ul>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown relative">
            <h3>Clients</h3>
            <ul className="text-[1rem]">
              <li>Why work with us</li>
              <li>How we support you</li>
              <li>Frameworks and contracts</li>
              <li>What our clients say</li>
            </ul>
          </li>
          <li>Vacancies</li>
        </ul>
        <div>
          <button className="bg-teal-800 px-4 py-3 rounded-md shadow-md shadow-slate-400 text-white">
            Quick Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
