import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Status {
  booked: boolean;
  completed: boolean;
}

interface LocumRoute {
  routeDirection: string;
  title: string;
  status?: Status;
}

interface PropTypes {
  locumRoute: LocumRoute;
}

const LocumRouteCard = ({ locumRoute }: PropTypes) => {
  const { status, title } =  locumRoute;
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-[95%] md:w-[40%] font-bold min-h-[5rem] md:h-[8rem] shadow-md overflow-hidden bg-teal-400 rounded-md text-xl"
      >
        <Link
          to={locumRoute.routeDirection}
          className="h-full w-full flex justify-center items-center"
          state={{ status, title}}
        >
          <p>{title}</p>
        </Link>
      </motion.div>
    </>
  );
};

export default LocumRouteCard;
