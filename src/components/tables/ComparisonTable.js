import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function ComparisonTable({ data }) {
  const columns = [
    {
      headerName: "Product Name",
      field: "productName",
      sortable: true,
      filter: true,
    },
    { headerName: "Category", field: "category", sortable: true, filter: true },
    {
      headerName: "Date 1 Sales",
      field: "date1Sales",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Date 2 Sales",
      field: "date2Sales",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Difference",
      valueGetter: (params) => params.data.date2Sales - params.data.date1Sales,
      sortable: true,
      filter: "agNumberColumnFilter",
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        columnDefs={columns}
        rowData={data}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
}

export default ComparisonTable;
