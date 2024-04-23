import { motion } from "framer-motion";
import SponsorOrApprovalComponent from "./SponsorOrApprovalComponent";
import { Button } from "@mui/material";

const SponsorsAndApprovalsArrayDisplay = () => {
  const array = new Array(5).fill("sponsor");
  return (
    <>
      <div className="bg-teal-500 py-2 w-[500px] overflow-hidden flex flex-nowrap">
        <motion.ul
          className="flex flex-row flex-nowrap gap-1"
          initial={{ translateX: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          {array.map((sample, i) => (
            <li key={i + 1}>
              <Button variant="contained">{sample}</Button>
            </li>
          ))}
        </motion.ul>
        <motion.ul
          className="flex flex-row flex-nowrap gap-1"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          {array.map((sample, i) => (
            <li key={i + 1}>
              <Button variant="contained">{sample}</Button>
            </li>
          ))}
        </motion.ul>
      </div>
      {/* <div className="bg-green-500 overflow-hidden inline-block whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 30, repeat: Infinity }}
          className="flex flex-nowrap justify-around my-[0.5rem] gap-[1rem]"
        >
          {array.map((element, index) => (
            <SponsorOrApprovalComponent key={element + index} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 30, repeat: Infinity }}
          className="flex flex-nowrap justify-around my-[0.5rem] gap-[1rem]"
        >
          {array.map((element, index) => (
            <SponsorOrApprovalComponent key={element + index} />
          ))}
        </motion.div>
      </div> */}
    </>
  );
};

export default SponsorsAndApprovalsArrayDisplay;
