import LocumRouteCard from "./LocumRouteCard";
const locumRoutes = [
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
const DashIndex = () => {
  
  return (
    <>
      <div className="flex flex-wrap p-[1rem] md:p-[2rem] justify-evenly gap-[1.5rem] rounded-md ">
        {locumRoutes.map((locumRoute) => (
          <LocumRouteCard
            routeDirection={locumRoute.routeDirection}
            title={locumRoute.title}
            key={locumRoute.title}
          />
        ))}
      </div>
    </>
  );
};

export default DashIndex;
