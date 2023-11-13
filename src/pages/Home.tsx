import Adverts from "../components/Home/Adverts";
import Hero from "../components/Home/Hero";
import TopJobs from "../components/Home/NewJobs";



const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero className="bg-white w-full h-64 flex flex-row overflow-auto" />
      <div className="min-w-full text-center font-bold text-4xl py-3 md:py-6">
        <h1>Recently added locum jobs</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-around">
        <TopJobs />
        <TopJobs />
        <TopJobs />
      </div>
      <Adverts />
    </div>
  );
};

export default Home;
