import { lazy } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
const DashboardLayout = lazy(() => import("./Layout/DashboardLayout"));
const SingleLocumPage = lazy(
  () => import("./pages/DashboardPages/SingleLocumPage")
);
const DashboardHome = lazy(() => import("./pages/DashboardHome"));
const LocumEdit = lazy(() => import("./pages/DashboardPages/LocumEdit"));
const SingleLocumLayout = lazy(() => import("./Layout/SingleLocumLayout"));
const CommonLocumsArrayPage = lazy(
  () => import("./pages/DashboardPages/CommonLocumsArrayPage")
);
const About = lazy(() => import("./pages/About"));
const Profile = lazy(() => import("./pages/Profile"));
const Registration = lazy(() => import("./pages/Registration"));
const Root = lazy(() => import("./pages/Root"));
const Login = lazy(() => import("./pages/Login"));
const RecoverPassword = lazy(() => import("./pages/RecoverPassword"));
const Home = lazy(() => import("./pages/Home"));
const CreateNew = lazy(() => import("./pages/DashboardPages/CreateNewLocum"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const dashboardChilren: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/open-locums",
    element: <CommonLocumsArrayPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/open-locums/:id",
    element: <SingleLocumLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/open-locums/:id",
        element: <SingleLocumPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard/open-locums/:id/edit",
        element: <LocumEdit />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard/booked-locums",
    element: <CommonLocumsArrayPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/booked-locums/:id",
    element: <SingleLocumPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/settled-locums",
    element: <CommonLocumsArrayPage />,
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
];

function App(props: Props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root {...props} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          errorElement: <ErrorPage />,
          children: dashboardChilren,
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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
