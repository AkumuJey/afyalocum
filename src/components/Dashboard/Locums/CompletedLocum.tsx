import { TabPanel } from "@mui/lab";
import SingleLocum from "./SingleLocum";
import TableLayout from "./TableLayout";
import { useState } from "react";

interface Locum {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
}

interface Props {
  value: string
  data: Locum[] | null
}


const CopletedLocum = ({value, data} : Props) => {

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
          <TableLayout onClick={() => setDetailsOpen(true)} data={data}/>
        )}
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium delectus in similique numquam, sequi qui reiciendis debitis temporibus atque dolore iste provident natus earum exercitationem facere incidunt sint dolorum praesentium.</div>
      </TabPanel>
    </>
  );
};

export default CopletedLocum;
