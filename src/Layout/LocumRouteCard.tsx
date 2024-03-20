import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface PropTypes {
  routeDirection: string;
  title: string;
}

const LocumRouteCard = ({ routeDirection, title }: PropTypes) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-[95%] md:w-[40%] font-bold md:h-[8rem] shadow-md overflow-hidden bg-teal-400 rounded-md text-xl"
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
