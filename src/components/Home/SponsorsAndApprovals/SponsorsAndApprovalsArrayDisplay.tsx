import { Button } from "@mui/material";
import { motion } from "framer-motion";

const SponsorsAndApprovalsArrayDisplay = () => {
  const array = new Array(5).fill("sponsor");
  return (
    <>
      <div id="horizontal-scroll" className="py-2 w-full max-w-xl mx-auto overflow-hidden flex flex-nowrap gap-2 ">
        <motion.ul
          className="flex flex-row flex-nowrap gap-2"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          {array.map((sample, i) => (
            <li key={i + 1}>
              <Button variant="contained" color="success">{sample}</Button>
            </li>
          ))}
        </motion.ul>
        <motion.ul
          className="flex flex-row flex-nowrap gap-2"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
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
