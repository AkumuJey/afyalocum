const Navbar = () => {
  return (
    <nav className="w-full text-[2rem] flex flex-row h-[4.5rem] shadow-sm shadow-gray-900 font-semibold">
        <div className="w-[8%] bg-green-500">Logo</div>
        <div className="w-[92%] bg-red-300 flex flex-row justify-between">
            <h2>locumpeople</h2>
            <div>Humburger</div>
        </div>
    </nav>
  )
}

export default Navbar