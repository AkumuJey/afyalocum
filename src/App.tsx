import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";


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
        <Navbar />
        <RouterProvider router={router}/>
        <ScrollToTop />
    </div>
  );
}

export default App;
