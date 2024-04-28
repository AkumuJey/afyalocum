import { useEffect } from "react";
import LocumLinkCard from "../../components/Dashboard/LocumLinkCard";
interface Status {
  booked: boolean;
  completed: boolean;
}
interface LocumRoute {
  routeDirection: string;
  title: string;
  status?: Status;
}

const locumRoutes: LocumRoute[] = [
  {
    title: "Create new locum",
    routeDirection: "/dashboard/create-new-locum",
  },
  {
    title: "Open Locums",
    routeDirection: "/dashboard/open-locums",
  },
  {
    title: "Booked Locums",
    routeDirection: "/dashboard/booked-locums",
  },
  {
    title: "Settled locum",
    routeDirection: "/dashboard/settled-locums",
  },
];
const DashboardHome = () => {
  useEffect(() => {
    document.title = "AfyaLocum - Dashboard";
  }, []);
  return (
    <>
      <div className="flex flex-wrap p-[1rem] md:p-[2rem] justify-evenly gap-[1.5rem] rounded-md ">
        {locumRoutes.map((locumRoute) => (
          <LocumLinkCard
            locumRoute={locumRoute}
            key={locumRoute.title}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardHome;
