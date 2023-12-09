import { Box, Skeleton } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { generateRandomData } from "./dummyData";
import { useEffect, useState } from "react";

interface Props {
  onClick: () => void;
}
const TableLayout = ({ onClick }: Props) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullName",
      headerName: "Title",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 130,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "firstName",
      headerName: "Location",
      width: 120,
      editable: true,
      pinnable: true,
    },
    {
      field: "lastName",
      headerName: "Start",
      width: 120,
      editable: true,
    },
    {
      field: "age",
      headerName: "Rate KSh/Hr",
      type: "number",
      width: 90,
      editable: true,
    },
  ];

  const [isLoading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    // Simulating data fetching delay
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulating API call delay
        setTimeout(() => {
          const data = generateRandomData();
          setRows(data);
          setLoading(false);
        }, 5000); // Adjust the timeout to simulate data loading
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Box
        sx={{
          height: {
            xs: "auto",
            md: 400,
          },
          overflow: "auto",
          width: {
            xs: "100%",
            md: "60%",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        {isLoading ? (
          Array.from({ length: 7 }, (_, index) => (
            <Box
              key={index}
              sx={{
                borderBottom: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                padding: "0.5rem 0",
              }}
            >
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  flex: 1,
                  height: "2rem",
                  borderRadius: "4px",
                  marginLeft: "1rem",
                }}
              />
            </Box>
          ))
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
            onRowClick={onClick}
          />
        )}
      </Box>
    </>
  );
};

export default TableLayout;
