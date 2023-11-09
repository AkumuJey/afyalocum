const NavLinkList = () => {
  return (
    <>
    <ul className="links flex flex-col md:flex-row justify-evenly gap-[3rem] items-center text-[1.2rem] font-medium py-7 md:pr-[4rem]">
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
        <li>
          <button className="bg-teal-800 px-4 py-3 rounded-md shadow-md shadow-slate-400 text-white">
            Quick Registration
          </button>
        </li>
      </ul>
    </>
  )
}

export default NavLinkList