import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, useEffect } from "react";

// import Home from "./pages/Home";
// import ErrorPage from "./pages/ErrorPage";

import LayoutDash from "./Layout/LayoutDash";
import OpenLocums from "./pages/OpenLocums";
import SingleLocumPage from "./pages/SingleLocumPage";
// import CreateNew from "./pages/CreateNew";
const About = lazy(() => import("./pages/About"))
const Profile = lazy(() => import("./pages/Profile"))
const Registration = lazy(() => import("./pages/Registration"))
const Root = lazy(() => import("./pages/Root"))
const Login = lazy(() => import("./pages/Login"))
const RecoverPassword = lazy(() => import("./pages/RecoverPassword"))
const Home = lazy(() => import("./pages/Home"))
const CreateNew = lazy(() => import("./pages/CreateNewLocum"))
// const Dashboard = lazy(() => import("./pages/Dashboard"))
const ErrorPage = lazy(() => import("./pages/ErrorPage"))



interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function App(props: Props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root {...props} />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/dashboard",
          element: <LayoutDash />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/dashboard/open-locums",
              element: <OpenLocums />,
              errorElement: <ErrorPage />,
            },
            {
              path: "/dashboard/open-locums/:id",
              element: <SingleLocumPage />,
              errorElement: <ErrorPage />,
            },
            {
              path: "/dashboard/booked-locums",
              element: <OpenLocums />,
              errorElement: <ErrorPage />,
            },
            {
              path: "/dashboard/booked-locums/:id",
              element: <SingleLocumPage />,
              errorElement: <ErrorPage />,
            },
            {
              path: "/dashboard/settled-locums",
              element: <OpenLocums />,
              errorElement: <ErrorPage />,
            },
            {
              path: "/dashboard/settled-locums/:id",
              element: <SingleLocumPage />,
              errorElement: <ErrorPage />,
            },
            {
              path: "/dashboard/create-new-locum",
              element: <CreateNew />,
              errorElement: <ErrorPage />,
            },
          ]
        },
        {
          path: "/login",
          element: <Login />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/recover-password",
          element: <RecoverPassword />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/register",
          element: <Registration />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/profile",
          element: <Profile />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  useEffect(() => {
    console.log("Rendered");
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
