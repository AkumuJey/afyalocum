import { lazy } from "react";
import LayoutDash from "../../Layout/LayoutDash";
const LayoutDash = lazy(() => import("../../Layout/LayoutDash"));


const DashboardExport = {
    path: "/dashboard",
    element: <LayoutDash />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashIndex />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard/open-locums",
        element: <OpenLocums />,
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
        element: <BookedLocums />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard/booked-locums/:id",
        element: <SingleLocumPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard/settled-locums",
        element: <SettledLocums />,
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
    ],
  },