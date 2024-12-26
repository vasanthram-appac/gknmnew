import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as XLSX from "xlsx"; // For Excel Export
import { jsPDF } from "jspdf"; // For PDF Export
import Modal from "react-modal";

const CombinedComponent = () => {
  const [doctorRows, setDoctorRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortModel, setSortModel] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [newDoctor, setNewDoctor] = useState({ name: "", status: "" }); // New doctor form data

  // Doctor Columns
  const doctorColumns = [
    { field: "index", headerName: "S.No.", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "qualification", headerName: "Qualification", width: 150 },
    { field: "department", headerName: "department", width: 150 },
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
            qualification: item.qualification,
            department: item.department,
            status: item.status,
          }));
          setDoctorRows(formattedDoctors);
        }
      })
      .catch((error) => console.error("Error fetching doctor data:", error));
  }, []);

  // Handle export to Excel
  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(doctorRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Doctor List");
    XLSX.writeFile(wb, "doctor_list.xlsx");
  };

  // Handle export to PDF
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Doctor List", 14, 20);
    doc.save("doctor_list.pdf");
  };

  // Handle sort model change
  const handleSortModelChange = (newSortModel) => {
    setSortModel(newSortModel);
  };

  // Handle add doctor button click
  const handleAddDoctor = () => {
    setIsModalOpen(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setNewDoctor({
      name: "",
      status: "",
      qualification: "",
      department: "",
      image: "",
      new_op: "",
      review_op: "",
      experience: "",
      expertise: ""
    });
    setIsModalOpen(false);
  };

  // Handle form submit for adding a new doctor
  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/test/api/doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDoctor),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "Doctor added successfully") {
          alert("Doctor added successfully");
          setDoctorRows((prevRows) => [...prevRows, res.data]);
          handleCloseModal();
        }
      })
      .catch((error) => {
        window.alert(error.message || "An unexpected error occurred");
      });
  };

  // Filtered rows based on search query
  const filteredDoctorRows = doctorRows.filter((row) => {
    return (
      row.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.qualification?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.status?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Dynamically generate S.No. for filtered rows
  const rowsWithIndex = filteredDoctorRows.map((row, index) => ({
    ...row,
    index: index + 1,
  }));

  return (
    <div>
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
                <div className="" style={{ float: "right" }}>
                  <button onClick={handleAddDoctor}>Add Doctor</button>
                </div>

                {/* Search Box */}
                <div className="search-box">
                  <div className="search">
                    <form>
                      <label>Search:</label>
                      <input
                        type="text"
                        className="search-box"
                        placeholder="Search by Name, Qualification or Status"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </form>
                  </div>
                </div>

                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={rowsWithIndex}
                    columns={doctorColumns}
                    pageSize={10}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    components={{
                      Toolbar: GridToolbar,
                    }}
                    sortModel={sortModel}
                    onSortModelChange={handleSortModelChange}
                  />
                </div>
              </div>

              {/* Export Buttons */}
              <div className="export-buttons">
                <button onClick={handleExportExcel}>Export to Excel</button>
                <button onClick={handleExportPDF}>Export to PDF</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Adding Doctor */}
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>Add Doctor</h2>
        <form onSubmit={handleFormSubmit} id="doctorForm">
          <div className="row">
            <div className="col-lg-6">
              <label>
                Name:
                <input type="text" name="name" value={newDoctor.name} onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}/>
              </label>
            </div>

            <div className="col-lg-6">
              <label>
              Qualification:
                <input type="text" name="qualification" value={newDoctor.qualification} onChange={(e) => setNewDoctor({ ...newDoctor, qualification: e.target.value })}/>
              </label>
            </div>

            <div className="col-lg-6">
              <label>
              Department:
                <input type="text" name="department" value={newDoctor.department} onChange={(e) => setNewDoctor({ ...newDoctor, department: e.target.value })}/>
              </label>
            </div>

            <div className="col-lg-6">
              <label>
              Image:
                <input type="file" name="image" value={newDoctor.image} onChange={(e) => setNewDoctor({ ...newDoctor, image: e.target.value })} accept="image/webp"/>
              </label>
            </div>

            <div className="col-lg-6">
              <label>
              New OP Days:
              <input type="text" name="new_op" value={newDoctor.new_op} onChange={(e) => setNewDoctor({ ...newDoctor, new_op: e.target.value })}/>
              </label>
            </div>

            <div className="col-lg-6">
              <label>
              Review OP Days:
              <input type="text" name="review_op" value={newDoctor.review_op} onChange={(e) => setNewDoctor({ ...newDoctor, review_op: e.target.value })}/>
              </label>
            </div>

            <div className="col-lg-6">
              <label>
              Experience:
              <input type="text" name="experience" value={newDoctor.experience} onChange={(e) => setNewDoctor({ ...newDoctor, experience: e.target.value })}/>
              </label>
            </div>

            <div className="col-lg-6">
              <label>
              Expertise:
              <input type="text" name="expertise" value={newDoctor.expertise} onChange={(e) => setNewDoctor({ ...newDoctor, expertise: e.target.value })}/>
              </label>
            </div>

            <div className="col-lg-6">
              <label>
                Status:
                <div className="mt-2">
                  <div className="form-check form-check-inline">
                    <input type="radio" id="activeRadio1" name="status" value="Active" className="form-check-input" required checked={newDoctor.status == "Active"} onChange={(e) => setNewDoctor({ ...newDoctor, status: e.target.value })} />
                    <label htmlFor="activeRadio1" className="label-color">Active</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input type="radio" id="inactiveRadio2" name="status" value="Inactive" className="form-check-input" required checked={newDoctor.status == "Inactive"} onChange={(e) => setNewDoctor({ ...newDoctor, status: e.target.value })} />
                    <label htmlFor="inactiveRadio2" className="label-color">Inactive</label>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <button type="submit">Submit</button>
          <button type="button" onClick={handleCloseModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default CombinedComponent;
