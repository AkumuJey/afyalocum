import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
const DashboardLayout = lazy(() => import("./Layout/DashboardLayout"));
const SingleLocumPage = lazy(
  () => import("./pages/dashboard-pages/SingleLocumPage")
);
const DashboardHome = lazy(
  () => import("./pages/dashboard-pages/DashboardHome")
);
const LocumEdit = lazy(() => import("./pages/dashboard-pages/LocumEdit"));
const SingleLocumLayout = lazy(() => import("./Layout/SingleLocumLayout"));
const CommonLocumsArrayPage = lazy(
  () => import("./pages/dashboard-pages/CommonLocumsArrayPage")
);
const About = lazy(() => import("./pages/About"));
const Profile = lazy(() => import("./pages/Profile"));
const Registration = lazy(() => import("./pages/Registration"));
const Root = lazy(() => import("./pages/Root"));
const Login = lazy(() => import("./pages/Login"));
const RecoverPassword = lazy(() => import("./pages/RecoverPassword"));
const Home = lazy(() => import("./pages/Home"));
const CreateNew = lazy(() => import("./pages/dashboard-pages/CreateNewLocum"));
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
    element: (
        <CommonLocumsArrayPage
          booked={false}
          completed={false}
          title="Open Locums"
        />
    ),
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
    element: (
        <CommonLocumsArrayPage
          booked={true}
          completed={false}
          title="Booked Locums"
        />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/booked-locums/:id",
    element: <SingleLocumPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/settled-locums",
    element: (
      <CommonLocumsArrayPage
        booked={true}
        completed={false}
        title="Settled locum"
      />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/settled-locums/:id",
    element: <SingleLocumPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/create-new-locum",
    element: (
        <CreateNew />
    ),
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
          element: (
            <Suspense fallback={<LoadingPage content="Welcome" />}>
              <Home />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "/dashboard",
          element: (
            <Suspense fallback={<LoadingPage content="Locums" />}>
              <DashboardLayout />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
          children: dashboardChilren,
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<LoadingPage content="Login" />}>
              <Login />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "/recover-password",
          element: (
            <Suspense fallback={<LoadingPage content="Recover Password" />}>
              <RecoverPassword />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "/register",
          element: (
            <Suspense fallback={<LoadingPage content="Signup" />}>
              <Registration />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "/profile",
          element: (
            <Suspense fallback={<LoadingPage content="Profile" />}>
              <Profile />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<LoadingPage content="About" />}>
              <About />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
        },
        // {
        //   path: "/loading",
        //   element: <LoadingPage />,
        //   errorElement: <ErrorPage />,
        // },
      ],
    },
  ]);
  return (
    <>
      <Suspense fallback={<LoadingPage marginTop="mt-0" />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
