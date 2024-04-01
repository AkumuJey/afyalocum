import { motion } from "framer-motion";
import SponsorOrApprovalComponent from "./SponsorOrApprovalComponent";

const SponsorsAndApprovalsArrayDisplay = () => {
  const array = new Array(3).fill("sponsor");
  return (
    <motion.div className="flex flex-nowrap justify-around my-[2rem] gap-[1rem] overflow-hidden">
      {array.map((element, index) => (
        <SponsorOrApprovalComponent key={element + index}/>
      ))}
    </motion.div>
  );
};

export default SponsorsAndApprovalsArrayDisplay;
