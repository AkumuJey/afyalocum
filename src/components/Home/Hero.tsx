interface heroProps {
  className: string;
}

import HeroImage from "../../assets/hero.svg";
const Hero = ({ className }: heroProps) => {
 
  return (
    <div className={className}>
      <div className="bg-teal-700 flex items-center justify-center">
      <div className="flex-col gap-4 p-[2rem] text-center md:text-left">
        <h2 className="text-white text-3xl">
          <span className="font-semibold">Medical recruitment</span>
          <br />
          <span className="font-bold">made easy</span>
        </h2>
        <div className="flex flex-col gap-2 text-[1.2rem">
          <p>Providing the right locums at the right time.</p>
          <p>
            We’re a forward thinking, innovative agency with expert recruitment
            and compliance teams managing and supporting locums across the NHS
            and private healthcare organisations.
          </p>
          <div className="flex flex-col text-[1.5rem] gap-4 justify-center items-center font-semibold">
            <button className="bg-[#002333] px-4 py-2 rounded-md text-white">Current Vacancies</button>
            <button className="bg-white px-4 py-2 rounded-md text-teal-800">Why Locum People?</button>
          </div>
        </div>
      </div>
      <div className="hidden md:block overflow-hidden box-border w-1/6 h-full border-b-[600px] border-t-[0px] border-l-[100px] border-r-[60px] border-t-transparent border-l-transparent border-solid border-white"></div>
      </div>
      <img src={HeroImage} alt="Hero Image" className="w-1/2 bg-white hidden md:block" />
    </div>
  );
};

export default Hero;
