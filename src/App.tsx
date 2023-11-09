import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

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
    <div className="bg-white min-h-[100dvh] flex flex-col text-[1rem] font-sans z-0">
      <header>
        <Navbar />
      </header>
      <body>
        <RouterProvider router={router} />
      </body>
    </div>
  );
}

export default App;
