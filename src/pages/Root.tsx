import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import ScrollToTop from "../components/ScrollToTop"
import Navbar from "../components/Navbar/Navbar"

const Root = () => {
  return (
    <div className="bg-transparent min-h-[100dvh] min-w-full text-[1rem] font-sans z-0 pt-[5rem]">
        <Navbar />
        <div className="min-h-screen">
        <Outlet />
        </div>
        <Footer/>
        <ScrollToTop />
    </div>
  )
}

export default Root