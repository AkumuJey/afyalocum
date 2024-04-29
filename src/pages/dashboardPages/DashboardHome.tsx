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

const DashboardHome = () => {
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
  useEffect(() => {
    document.title = "AfyaLocum - Dashboard";
  }, []);
  return (
    <>
    <div className="flex flex-col items-center md:justify-center valid-height py-[2rem]">
      <div className="flex flex-row flex-wrap justify-center box-border px-[1rem] py-[2rem] h-[20rem] gap-[1rem] w-full md:w-[70%]">
        {locumRoutes.map((locumRoute) => (
          <LocumLinkCard
            locumRoute={locumRoute}
            key={locumRoute.title}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default DashboardHome;
