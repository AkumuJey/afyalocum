const Navbar = () => {
  return (
    <nav className="w-full text-[2rem] flex flex-row h-[4.5rem] font-semibold box-border px-[2rem]">
        <div className="w-[8%]">Logo</div>
        <div className="w-[92%] flex flex-row justify-between">
            <h2>
                <span className="text-[#198754]">locum</span>
                <span className="text-[#6c757d]">people</span>
            </h2>
            <div>Humburger</div>
            <div className="absolute w-[100dvw] h-[100dvh] z-10 bg-white top-0 left-0 flex flex-col items-center justify-center text-center py-[1rem] gap-4">
                <div>
                    <span className="text-[#198754]">locum</span>
                    <span className="text-[#6c757d]">people</span>
                </div>
                <div className="text-[1rem]">
                    <ul className="flex flex-col gap-4">
                        <li>About Us</li>
                        <li>Candidates</li>
                        <li>Vacancies</li>
                        <li>Clients</li>
                        <li>Latest News</li>
                        <li>FAQs</li>
                        <li>Resources for Locums</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button className="text-[1.5rem] bg-[#198754] w-fit px-4 py-1 rounded-sm text-white">Quick Registration</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar