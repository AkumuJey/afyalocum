import { motion } from "framer-motion";
import { Link } from "react-router-dom";


interface LocumRoute {
  title: string;
  routeDirection: string
}
interface PropTypes{
  locumRoute: LocumRoute
}

const LocumRouteCard = ({ locumRoute }: PropTypes) => {
  const {title, routeDirection} = locumRoute
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-[45%] font-bold min-h-[5rem] md:h-[8rem] shadow-md overflow-hidden bg-teal-400 rounded-md text-xl"
      >
        <Link
          to={routeDirection}
          className="h-full w-full flex justify-center items-center"
        >
          <p>{title}</p>
        </Link>
      </motion.div>
    </>
  );
};

export default LocumRouteCard;
