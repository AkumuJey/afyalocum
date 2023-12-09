import { TabPanel } from "@mui/lab";
import SingleLocum from "./SingleLocum";
import TableLayout from "./TableLayout";
import { useState } from "react";
interface Props {
  value: string
}
const CopletedLocum = ({value} : Props) => {

    const [detailsOpen, setDetailsOpen] = useState(false);
  return (
    <>
      <TabPanel
        value={value}
        sx={{
          width: "100%",
        }}
      >
        {detailsOpen ? (
          <SingleLocum onClose={() => setDetailsOpen(false)} />
        ) : (
          <TableLayout onClick={() => setDetailsOpen(true)} />
        )}
      </TabPanel>
    </>
  );
};

export default CopletedLocum;
