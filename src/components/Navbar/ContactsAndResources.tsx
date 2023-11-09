
const ContactsAndResources = () => {
  return (
    <ul className="flex order-last md:order-first md:justify-end gap-[3rem] md:w-full bg-slate-100 shadow-sm shadow-black py-2 px-[4rem]">
        <li className="hidden md:block">Latest News</li>
        <li className="hidden md:block">FAQs</li>
        <li className="hidden md:block">Resources for Locums</li>
        <li className="flex gap-[3rem]">
          <h4>Contact</h4>
          <ul className="hidden md:flex gap-[2rem]">
            <li>
              <i className="icon ion-md-call"></i>+254701439136
            </li>
            <li>
              <i className="icon ion-md-mail"></i>
            </li>
            <li>
              <i className="icon ion-md-medkit"></i>
            </li>
          </ul>
        </li>
      </ul>
  )
}

export default ContactsAndResources