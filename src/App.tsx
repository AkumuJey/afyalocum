import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";


import Locums from "./pages/Locums";
import Resigstration from "./pages/Resigstration";
import About from "./pages/About";
import Root from "./pages/Root";
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";
import Profile from "./pages/Profile";

interface Props {

  window?: () => Window;
  children: React.ReactElement;
}

function App(props: Props) {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root {...props}/>,
      children: [
        
        {
          path: "/",
          element: <Home/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/locums",
          element: <Locums/>,
          errorElement: <ErrorPage />
        },
        {
          path: "/login",
          element: <Login />,
          errorElement: <ErrorPage />
        },
        {
          path: "/recover-password",
          element: <RecoverPassword />,
          errorElement: <ErrorPage />
        },
        {
          path: "/register",
          element: <Resigstration />,
          errorElement: <ErrorPage />
        },
        {
          path: "/profile",
          element: <Profile/>,
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
