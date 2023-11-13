import {  useRef } from 'react'
interface heroProps {
  className: string;
}

import HeroImage from "../../assets/hero.svg";
const Hero = ({ className }: heroProps) => {
  const triangle = useRef(null)
 
  return (
    <div className={className}>
      <div className="bg-teal-700 flex-col gap-4 px-[5rem]">
        <h2 className="text-white text-3xl">
          <span className="font-semibold">Medical recruitment</span>
          <br />
          <span className="font-bold">made easy</span>
        </h2>
        <div className="flex flex-col gap-2">
          <p>Providing the right locums at the right time.</p>
          <p>
            We’re a forward thinking, innovative agency with expert recruitment
            and compliance teams managing and supporting locums across the NHS
            and private healthcare organisations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-semibold">
            <button className="bg-[#002333] px-4 py-2 rounded-md text-white">Current Vacancies</button>
            <button className="bg-white px-4 py-2 rounded-md text-teal-600">Why Locum People?</button>
          </div>
        </div>
      </div>
      <div className="w-1/5 border-b-teal-700 border-solid border-b-" ref={triangle}></div>
      <img src={HeroImage} alt="Hero Image" className="w-1/2 bg-white hidden md:block" />
    </div>
  );
};

export default Hero;
