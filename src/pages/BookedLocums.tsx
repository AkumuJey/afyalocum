import LocumCard from "../components/Dashboard/LocumCard";

const BookedLocums = () => {
  return (
    <>
      <div className="flex gap-[1.5rem] flex-wrap p-[1.5rem] justify-start w-[95%] md:w-4/4 mx-auto">
        {Array(9)
          .fill(null)
          .map((_item, index) => (
            <LocumCard index={index} key={index}/>
          ))}
      </div>
    </>
  )
}

export default BookedLocums
