import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello World</div>,
    },
  ]);
  useEffect(() => {
    console.log("Rendered");
  }, []);
  return (
    <div className="bg-white min-h-[100dvh] overflow-scroll flex flex-col text-[1rem] font-sans z-0">
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
