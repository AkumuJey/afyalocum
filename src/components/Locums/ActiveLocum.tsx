import { TabPanel } from "@mui/lab";
import TableLayout from "./TableLayout";

interface Props{
    value: string
}
const ActiveLocum = ({value} : Props) => {
  return (
    <>
      <TabPanel
        value={value}
        sx={{
          width: "100%",
        }}
      >
        <TableLayout onClick={() => null} />
      </TabPanel>
    </>
  );
};

export default ActiveLocum;
