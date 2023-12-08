import { Suspense, useState, SyntheticEvent } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Skeleton, Tab } from "@mui/material";
import TableLayout from "../components/Locums/TableLayout";
import NewLocumForm from "../components/Locums/NewLocumForm";
import Notification from "../components/Notification";
import SingleLocum from "../components/Locums/SingleLocum";

const Locums = () => {
  const [value, setValue] = useState("1");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const handleTabChange = (_e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col items-center valid-height w-full">
      
      <TabContext value={value}>
        <Box
          component="div"
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            transition: "all 500ms ease",
          }}
        >
          <TabList
            aria-label="Locums"
            onChange={handleTabChange}
            className="w-full flex flex-row justify-around"
          >
            <Tab label="Active Locums" value="1" /> <Notification count={4} />
            <Tab label="Create New Locum" value="2" />
            <Tab label="Completed Locum" value="3" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            width: "100%",
          }}
        >
          <TableLayout onClick={() => null}/>
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            width: "100%",
          }}
        >
          <NewLocumForm />
        </TabPanel>
        <TabPanel
          value="3"
          sx={{
            width: "100%",
          }}
        >
          {detailsOpen ? (
            <SingleLocum onClose={() => setDetailsOpen(false)} />
          ) : (
            <Suspense fallback={<Skeleton/>}>
              <TableLayout onClick={() => setDetailsOpen(true)} />
            </Suspense>
          )}
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default Locums;
