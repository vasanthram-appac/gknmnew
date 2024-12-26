import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as XLSX from "xlsx"; // For Excel Export
import { jsPDF } from "jspdf"; // For PDF Export

const CombinedComponent = () => {
  const [doctorRows, setDoctorRows] = useState([]);
  const [dailyReportRows, setDailyReportRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortModel, setSortModel] = useState([]);

  // Doctor Columns and Visibility State
  const doctorColumns = [
    { field: "index", headerName: "S.No.", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <button onClick={() => alert(`Editing ${params.row.name}`)}>Edit</button>
      ),
    },
  ];

  // Fetch data for Doctors
  useEffect(() => {
    fetch("http://localhost:8000/test/api/doctor")
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          const formattedDoctors = res.data.map((item, index) => ({
            id: item._id,
            name: item.name,
            status: item.status,
          }));
          setDoctorRows(formattedDoctors);
        }
      })
      .catch((error) => console.error("Error fetching doctor data:", error));
  }, []);

  // Fetch data for Daily Reports
  useEffect(() => {
    fetch("http://localhost:8000/test/api/doctor")
      .then((res) => res.json())
      .then((res) => setDailyReportRows(res.data))
      .catch((error) =>
        console.error("Error fetching daily report data:", error)
      );
  }, []);

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(dailyReportRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Daily Report");
    XLSX.writeFile(wb, "daily_report.xlsx");
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Daily Report", 14, 20);
    doc.save("daily_report.pdf");
  };

  const filteredRows = dailyReportRows.filter((row) => {
    return (
      row.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.status?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Dynamically add index number for filtered rows
  const getSortedRows = (rows) => {
    const sortedRows = [...rows];
    sortedRows.sort((a, b) => {
      if (sortModel.length === 0) return 0;

      const { field, sort } = sortModel[0];
      const isAsc = sort === "asc";
      return isAsc
        ? a[field] > b[field]
          ? 1
          : -1
        : a[field] < b[field]
        ? 1
        : -1;
    });

    return sortedRows.map((row, index) => ({
      ...row,
      index: index + 1, // Adds a dynamic "S.No." field based on sorted order
    }));
  };

  const rowsWithIndex = getSortedRows(filteredRows);

  const handleSortModelChange = (newSortModel) => {
    setSortModel(newSortModel);
  };

  return (
    <div>
      {/* Doctors Section */}
      <section>
        <div className="profiled sub-pages">
          <div className="my-appac-hed">
            <div className="myappc-title">
              <p>Doctor</p>
            </div>
          </div>
          <div className="rpt-wrp">
            <div className="report-sts">
              <div className="w-table-cwrp">
                <div className="search-box">
                  <div className="search">
                    <form>
                      <label>Search:</label>
                      <input
                        className="search-box"
                        placeholder="Search by Client, Date or Status"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </form>
                  </div>
                </div>
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={rowsWithIndex} // Use rows with dynamically calculated index
                    columns={doctorColumns}
                    pageSize={10}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    components={{
                      Toolbar: GridToolbar,
                    }}
                    sortModel={sortModel}
                    onSortModelChange={handleSortModelChange} // Handle sort changes
                  />
                </div>
              </div>
              <div className="export-buttons">
                <button onClick={handleExportExcel}>Export to Excel</button>
                <button onClick={handleExportPDF}>Export to PDF</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombinedComponent;
