import { Box, Skeleton } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

interface Locum {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
}
interface Props {
  onClick: () => void;
  data: Locum[] | null
}


const TableLayout = ({ onClick, data }: Props) => {
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
      headerName: "Rate: KSh/Hr",
      type: "number",
      width: 100,
      editable: true,
    },
  ];

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
            md: "70%",
          },
          mx: "auto"
        }}
      >
        {!data ? (
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
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
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
