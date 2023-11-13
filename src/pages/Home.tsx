import Hero from "../components/Home/Hero"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero className="bg-white w-full h-1/2 flex flex-row overflow-auto"/>
      <div className="grow">
      </div>
    </div>
  )
}

export default Home