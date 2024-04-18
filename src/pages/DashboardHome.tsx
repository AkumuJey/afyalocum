import LocumLinkCard from "../components/Dashboard/LocumLinkCard";
interface LocumRoute {
  routeDirection: string;
  title: string;
  state?: string;
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
  return (
    <>
      <div className="flex flex-wrap p-[1rem] md:p-[2rem] justify-evenly gap-[1.5rem] rounded-md ">
        {locumRoutes.map((locumRoute) => (
          <LocumLinkCard locumRoute={locumRoute} key={locumRoute.title} />
        ))}
      </div>
    </>
  );
};

export default DashboardHome;
