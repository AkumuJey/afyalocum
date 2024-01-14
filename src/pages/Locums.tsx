import { useState, SyntheticEvent, useEffect } from "react";
import { TabContext, TabList } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  Tab,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CompletedLocum from "../components/Locums/CompletedLocum";
import CreateNewLocum from "../components/Locums/CreateNewLocum";
import { generateRandomData } from "../components/Locums/dummyData";
import ActiveLocum from "../components/Locums/ActiveLocum";
import ProtectedRoute from "../components/ProtectedRoute";

interface Locum {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
}
const Locums = () => {
  const [value, setValue] = useState("1");
  const handleTabChange = (_e: SyntheticEvent, newValue: string) => {
    if (newValue === "3") {
      getCompletedLocumData();
    }
    setValue(newValue);
  };
  const [completedLocumData, setCompletedLocumData] = useState<Locum[] | null>(
    null
  );
  const [activeLocumData, setActiveLocumData] = useState<Locum[] | null>(null);

  const getCompletedLocumData = async () => {
    if (!completedLocumData) {
      try {
        const data = await generateRandomData();
        setTimeout(() => {
          setCompletedLocumData(data);
        }, 5000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  useEffect(() => {
    const fetchActiveLocumData = async () => {
      try {
        const data = await generateRandomData();
        // Simulating API call delay
        setTimeout(() => {
          setActiveLocumData(data);
        }, 5000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchActiveLocumData();
  }, []);

  const [expanded, setExpanded] = useState<string | null>(null)
  const handleExpanded = (str: string) => {
    setExpanded(expanded ? null : str)
  }
  return (
    <ProtectedRoute>
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
          <ActiveLocum value="1" data={activeLocumData} />
          <CreateNewLocum value="2" />
          <CompletedLocum value="3" data={completedLocumData} />
        </TabContext>
        <Button color="primary" variant="outlined">
          Create new locum
        </Button>
        <Accordion expanded={expanded === "1"}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            onChange={() => handleExpanded("1")}
          >
            Option 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            eaque quas doloremque nulla beatae non itaque, impedit qui quos at
            numquam sapiente, fugiat doloribus molestias vero reiciendis ad
            architecto magnam!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Option 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            eaque quas doloremque nulla beatae non itaque, impedit qui quos at
            numquam sapiente, fugiat doloribus molestias vero reiciendis ad
            architecto magnam!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Option 3
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            eaque quas doloremque nulla beatae non itaque, impedit qui quos at
            numquam sapiente, fugiat doloribus molestias vero reiciendis ad
            architecto magnam!
          </AccordionDetails>
        </Accordion>
      </div>
    </ProtectedRoute>
  );
};

export default Locums;
