interface PropTypes{
  open: boolean
}

const ContactsAndResources = ({open}: PropTypes) => {
  return (
    <ul className={`${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} w-full text-center hidden md:flex order-last md:order-first md:justify-end gap-[3rem] md:w-full bg-white md:bg-slate-100 shadow-none md:shadow-sm shadow-black font-semibold md:py-2 px-[2rem] md:px-[4rem]`}>
      <li className="hidden md:block">Latest News</li>
      <li className="hidden md:block">FAQs</li>
      <li className="hidden md:block">Resources for Locums</li>
      <li className="flex flex-col md:flex-row items-center justify-center gap-[3rem] border-b-[1px] border-slate-600 md:border-none w-full md:w-auto">
        <h4 className="">Contact</h4>
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
  );
};

export default ContactsAndResources;
