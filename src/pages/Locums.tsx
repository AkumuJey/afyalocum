import { useState, SyntheticEvent } from "react";
import { TabContext, TabList, } from "@mui/lab";
import { Badge, Box, Tab } from "@mui/material";

import ActiveLocum from "../components/Locums/ActiveLocum";
import CompletedLocum from "../components/Locums/CompletedLocum";
import CreateNewLocum from "../components/Locums/CreateNewLocum";

const Locums = () => {
  const [value, setValue] = useState("1");
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
            <Tab
              label={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <span>Completed Locums</span>
                  <Badge
                    badgeContent={2}
                    color="success"
                    sx={{ marginLeft: 2 }} // Adjust the margin as per your preference
                  />
                </span>
              }
              value="3"
            />
          </TabList>
        </Box>
        <ActiveLocum value="1" />
        <CreateNewLocum value="2" />
        <CompletedLocum value="3" />
      </TabContext>
    </div>
  );
};

export default Locums;
