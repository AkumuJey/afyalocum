import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";


import Locums from "./pages/Locums";
import Resigstration from "./pages/Resigstration";
import About from "./pages/About";
import Root from "./pages/Root";


function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        
        {
          path: "/",
          element: <Home/>,
          errorElement: <ErrorPage />
        },
        {
          path: "/locums",
          element: <Locums/>,
          errorElement: <ErrorPage />
        },
        {
          path: "/register",
          element: <Resigstration />,
          errorElement: <ErrorPage />
        },
        {
          path: "/about",
          element: <About/>,
          errorElement: <ErrorPage />
        },
      ]
    },
  ]);
  useEffect(() => {
    console.log("Rendered");
  }, []);
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
