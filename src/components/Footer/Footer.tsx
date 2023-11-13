const Footer = () => {
    return (
        <footer  className="flex flex-col text-base text-center md:text-left text-white">
          <div className="flex flex-col md:flex-row justify-around gap-2 md:gap-0 bg-teal-700 p-[2rem] md:p-[4rem]">
            <div>
              <h2 className="font-bold mb-[1rem] md:mb-[2rem]">About us</h2>
              <ul>
                <li>About Locum People</li>
                <li>Meet our Leadership team</li>
                <li>Join our team</li>
                <li>Latest news</li>
                <li>Awards and accolades</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold md:mb-[2rem]">Clients</h2>
              <ul>
                <li>Why work with us?</li>
                <li>How we support you</li>
                <li>Frameworks and contracts</li>
                <li>What our clients say</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold md:mb-[2rem]">Candidates</h2>
              <ul>
                <li>Doctors</li>
                <li>Nurses</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold md:mb-[2rem]">Locum People
              <p className="font-normal">
                  7 Clarendon Drive, Wymbush, <br /> Milton Keynes, MK8 8ED
                </p></h2>
              <ul>
                <li>
                  <a href="tel:+44 (0) 1908 683 906">+44 (0) 1908 683 906</a><br />
                  <a href="tel:+44 (0) 1908 683 907">+44 (0) 1908 683 907</a><br />
                  <a href="mailto:contact@locumpeople.co.uk">
                    contact@locumpeople.co.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between bg-teal-900 p-[1.2rem]">
            <ul className="flex flex-col md:flex-row gap-3 font-semibold">
              <li>Privacy policy</li>
              <li>Cookie policy</li>
              <li>Terms and Conditions</li>
            </ul>
            <div>© {new Date().getFullYear()} Locum People Ltd. All rights reserved.</div>
          </div>
        </footer>
    );
  };
  
  export default Footer;
  