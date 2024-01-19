import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  Button,
  Collapse,
  Link,
  LinkProps,
} from "@mui/material";

import { useEffect, useState } from "react";

import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import TableLayout from "../components/Locums/TableLayout";
import { generateRandomData } from "../components/Locums/dummyData";
import ProtectedRoute from "../components/ProtectedRoute";

interface Locum {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

const Locums = () => {
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
        setTimeout(() => {
          setActiveLocumData(data);
        }, 5000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchActiveLocumData();
  }, []);

  const [expanded, setExpanded] = useState<string | null>(null);
  const toggleExapnded = (str: string) => {
    if (expanded && expanded === str) {
      setExpanded(null);
    } else {
      setExpanded(str);
      if (str === "3") {
        getCompletedLocumData();
      }
    }
  };
  const location = useLocation();
  const hideRegister = location.pathname === "/locums";

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center valid-height w-full py-[4rem]">
        <div className="w-[80%] mx-auto py-[0.8rem]">
          <Breadcrumbs separator=">">
            <LinkRouter
              to={`/locums`}
              underline="hover"
              color={hideRegister ? "purple" : "black"}
              sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
            >
              Locums
            </LinkRouter>
            <LinkRouter
              to={`/locums/create-new`}
              underline="hover"
              color={!hideRegister ? "purple" : "black"}
              sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
            >
              New Locum
            </LinkRouter>
          </Breadcrumbs>
        </div>
        {hideRegister ? (
          <>
            <Accordion
              expanded={expanded === "2"}
              sx={{ width: "80%", mx: "auto" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                onClick={() => toggleExapnded("2")}
              >
                Pending Locums
              </AccordionSummary>
              <Collapse in={expanded === "2"} timeout={800} unmountOnExit>
                <AccordionDetails>
                  <TableLayout onClick={() => null} data={activeLocumData} />
                </AccordionDetails>
              </Collapse>
            </Accordion>
            <Accordion
              expanded={expanded === "3"}
              sx={{ width: "80%", mx: "auto" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                onClick={() => toggleExapnded("3")}
              >
                Completed Locums
              </AccordionSummary>
              <Collapse in={expanded === "3"} timeout={800} unmountOnExit>
              <AccordionDetails>
                <TableLayout data={completedLocumData} onClick={() => null} />
              </AccordionDetails>
              </Collapse>
            </Accordion>
          </>
        ) : (
          <Outlet />
        )}
        <div className="w-[80%] mx-auto py-[0.8rem]">
          {hideRegister ? (
            <>
              <Button color="primary" variant="outlined">
                <RouterLink to={`/locums/create-new`}>
                  Create new locum
                </RouterLink>
              </Button>
            </>
          ) : (
            <Button color="info" variant="outlined">
              <RouterLink to={`/locums`}>Back to locums</RouterLink>
            </Button>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Locums;
