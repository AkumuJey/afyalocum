import LocumCard from "../components/Dashboard/LocumCard"


const OpenLocums = () => {
  return (
    <><div className="flex gap-[1.5rem] flex-wrap px-[1.5rem] justify-start w-[95%] md:w-4/4">
    {Array(5)
      .fill(null)
      .map((_item, index) => (
        <LocumCard index={index}/>
      ))}
  </div></>
  )
}

export default OpenLocums
