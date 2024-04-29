import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import LoadingPage from "../components/LoadingPage";
import Navbar from "../components/Navbar/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { AuthContextProvider } from "../contexts/AuthContext";
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const Root = (props: Props) => {
  return (
    <Suspense fallback={<LoadingPage />}>
    <AuthContextProvider>
      <div className="bg-transparent min-h-[100dvh] w-full box-border text-[1rem] font-sans z-0 pt-[5rem]">
        <Navbar {...props} />
        <Suspense fallback={<LoadingPage />}>
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </div>
    </AuthContextProvider>
    </Suspense>
  );
};

export default Root;
