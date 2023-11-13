import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import Slide from "@mui/material/Slide";
import { useScrollTrigger } from "@mui/material";
import Footer from "./components/Footer/Footer";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: window
  });

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />
    },
  ]);
  useEffect(() => {
    console.log("Rendered");
  }, []);
  return (
    <div className="bg-transparent min-h-[100dvh] min-w-full text-[1rem] font-sans z-0">
        {/* <HideOnScroll> */}
        <Navbar />
        {/* </HideOnScroll> */}
        <RouterProvider router={router}/>
        <Footer />
        <ScrollToTop />
    </div>
  );
}

export default App;
