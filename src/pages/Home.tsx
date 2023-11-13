import Hero from "../components/Home/Hero"
import TopJobs from "../components/Home/NewJobs"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero className="bg-white w-full h-64 flex flex-row overflow-auto"/>
      <div className="grow ">
        <TopJobs />
      </div>
    </div>
  )
}

export default Home