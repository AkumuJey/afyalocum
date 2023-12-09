import { Suspense, useState, SyntheticEvent } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Badge, Box, Skeleton, Tab } from "@mui/material";
import TableLayout from "../components/Locums/TableLayout";
import NewLocumForm from "../components/Locums/NewLocumForm";

import SingleLocum from "../components/Locums/SingleLocum";
import ActiveLocum from "../components/Locums/ActiveLocum";

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
            <Tab
              label={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <span>Active Locums</span>
                  <Badge
                    badgeContent={2}
                    color="warning"
                    sx={{ marginLeft: 2 }} // Adjust the margin as per your preference
                  />
                </span>
              }
              value="1"
            />
            <Tab label="Create New Locum" value="2" />
            <Tab label={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <span>Completed Locums</span>
                  <Badge
                    badgeContent={2}
                    color="success"
                    sx={{ marginLeft: 2 }} // Adjust the margin as per your preference
                  />
                </span>
              } value="3" />
          </TabList>
        </Box>
        <ActiveLocum value={value}/>
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
              <TableLayout onClick={() => setDetailsOpen(true)} />
          )}
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default Locums;
