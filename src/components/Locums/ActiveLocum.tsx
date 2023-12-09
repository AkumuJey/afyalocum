import { TabPanel } from "@mui/lab";
import TableLayout from "./TableLayout";

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

const ActiveLocum = ({value, data} : Props) => {
  return (
    <>
      <TabPanel
        value={value}
        sx={{
          width: "100%",
        }}
      >
        <TableLayout onClick={() => null} data={data}/>
      </TabPanel>
    </>
  );
};

export default ActiveLocum;
