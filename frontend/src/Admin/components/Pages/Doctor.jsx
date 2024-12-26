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
  const [newDoctor, setNewDoctor] = useState({
    id: "",
    name: "",
    status: "",
    qualification: "",
    department: "",
    image: "",
    new_op: "",
    review_op: "",
    experience: "",
    expertise: "",
  }); 

  const doctorColumns = [
    { field: "index", headerName: "S.No.", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "qualification", headerName: "Qualification", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <button onClick={() => handleEditDoctor(params.row)}>Edit</button>
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
    setNewDoctor({
      id: "",
      name: "",
      qualification: "",
      department: "",
      status: "Active",
    });
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewDoctor({
      id: "",
      name: "",
      qualification: "",
      department: "",
      status: "",
      image: "",
      new_op: "",
      review_op: "",
      experience: "",
      expertise: "",
    });
  };

  const handleEditDoctor = (doctor) => {
    setNewDoctor(doctor); 
    setIsModalOpen(true); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newDoctor.name);
    formData.append("qualification", newDoctor.qualification);
    formData.append("department", newDoctor.department);
    formData.append("status", newDoctor.status);
    if (newDoctor.image) formData.append("image", newDoctor.image);

    // If new_op, review_op, experience, or expertise are provided, add them
    if (newDoctor.new_op) formData.append("new_op", newDoctor.new_op);
    if (newDoctor.review_op) formData.append("review_op", newDoctor.review_op);
    if (newDoctor.experience) formData.append("experience", newDoctor.experience);
    if (newDoctor.expertise) formData.append("expertise", newDoctor.expertise);

    // If doctor has an ID, update existing doctor
    const method = newDoctor.id ? "PUT" : "POST";
    const url = newDoctor.id
      ? `http://localhost:8000/test/api/doctor/${newDoctor.id}`
      : "http://localhost:8000/test/api/doctor";

    fetch(url, {
      method,
      body: formData, // Send formData instead of JSON
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "Doctor added successfully" || res.msg === "Doctor updated successfully") {
          alert(res.msg);
          // If updated, replace the old doctor in the rows
          if (newDoctor.id) {
            setDoctorRows((prevRows) =>
              prevRows.map((row) => (row.id === newDoctor.id ? res.data : row))
            );
          } else {
            setDoctorRows((prevRows) => [...prevRows, res.data]);
          }
          handleCloseModal();
        }
      })
      .catch((error) => {
        window.alert(error.message || "An unexpected error occurred");
      });
  };

  const filteredDoctorRows = doctorRows.filter((row) => {
    return (
      row.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.qualification?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.status?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
      index: index + 1, 
    }));
  };
  
  const rowsWithIndex = getSortedRows(filteredDoctorRows); 
  
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
                <div
                  className=""
                  style={{ float: "right", position: "relative", zIndex: 1 }}
                >
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

      {/* Modal for Adding/Editing Doctor */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{ overlay: { zIndex: 99 } }}
      >
        <h2>{newDoctor.id ? "Edit Doctor" : "Add Doctor"}</h2>
        <form onSubmit={handleFormSubmit} id="doctorForm" encType="multipart/form-data">
          <div className="row">
            {/* Input Fields */}
            <div className="col-lg-6">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={newDoctor.name}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, name: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="col-lg-6">
              <label>
                Qualification:
                <input
                  type="text"
                  name="qualification"
                  value={newDoctor.qualification}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, qualification: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="col-lg-6">
              <label>
                Department:
                <input
                  type="text"
                  name="department"
                  value={newDoctor.department}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, department: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="col-lg-6">
              <label>
                Image:
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, image: e.target.files[0] })
                  }
                  accept="image/webp"
                />
              </label>
            </div>
            {/* Additional Fields */}
            <div className="col-lg-6">
              <label>
                New OP Days:
                <input
                  type="text"
                  name="new_op"
                  value={newDoctor.new_op}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, new_op: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="col-lg-6">
              <label>
                Review OP Days:
                <input
                  type="text"
                  name="review_op"
                  value={newDoctor.review_op}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, review_op: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="col-lg-6">
              <label>
                Experience:
                <input
                  type="text"
                  name="experience"
                  value={newDoctor.experience}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, experience: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="col-lg-6">
              <label>
                Expertise:
                <input
                  type="text"
                  name="expertise"
                  value={newDoctor.expertise}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, expertise: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="col-lg-12">
              <label>
                Status:
                <select
                  value={newDoctor.status}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, status: e.target.value })
                  }
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
            </div>
            <div className="col-lg-12">
              <button type="submit">{newDoctor.id ? "Update" : "Add"}</button>
              <button type="button" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CombinedComponent;
