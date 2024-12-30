import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as XLSX from "xlsx"; // For Excel Export
import { jsPDF } from "jspdf"; // For PDF Export
import Modal from "react-modal";

const CombinedComponent = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
 
  const [refreshData, setRefreshData] = useState(false);
  const [gknmRows, setGknmRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortModel, setSortModel] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [newGknm, setNewGknm] = useState({
    id: "",
    title: "",
    subtitle: "",
    status: "",
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    index: true,
    title: true,
    subtitle: true,
    status: true,
    action: true,
  });

  const gknmColumns = [
    { field: "index", headerName: "S.No.", width: 90 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "subtitle", headerName: "Sub Title", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => handleEditSpecialities(params.row)}>Edit</button>
          <button onClick={() => handleDeleteSpecialities(params.row)}>Delete</button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch(`${baseUrl}specialities`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          const formattedGknm = res.data.map((item) => ({
            id: item.id, // Ensure each row has a unique `id`
            title: item.title,
            subtitle: item.subtitle,
            status: item.status,
          }));
          setGknmRows(formattedGknm); 
        }
      })
      .catch((error) => console.error("Error fetching specialities data:", error));
  }, [refreshData]);
  
  // Handle export to Excel
  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(gknmRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Specialities List");
    XLSX.writeFile(wb, "specialities_list.xlsx");
  };

  // Handle export to PDF
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Specialities List", 14, 20);
    doc.save("specialities_list.pdf");
  };

  // Handle add Specialities button click
  const handleAddSpecialities = () => {
    setIsModalOpen(true);
    setNewGknm({
      id: "",
      title: "",
      subtitle: "",
      status: "Active",
    });
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDynamicFields([{ title: "", content: "", titlestatus: "Active" }]);
    setNewGknm({
      id: "",
      title: "",
      subtitle: "",
      status: "",
    });
  };

  const handleEditSpecialities = (specialities) => {
    setNewGknm(specialities);
    setIsModalOpen(true);
  };

  const handleDeleteSpecialities = async (specialities) => {
    if (window.confirm(`Are you sure you want to delete Dr. ${specialities.name}?`)) {
      try {
        const response = await fetch(`${baseUrl}specialities/${specialities.id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.msg || 'Failed to delete specialities');
        }

        alert('Specialities deleted successfully');
        setGknmRows(prevRows => prevRows.filter(d => d.id !== specialities.id));
        // Refresh the data or remove the deleted specialities from the UI
      } catch (err) {
        console.error('Error deleting specialities:', err);
        alert(`Error: ${err.message}`);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newGknm.title);
    formData.append("subtitle", newGknm.subtitle);
    formData.append("status", newGknm.status);
    if (newGknm.image) formData.append("image", newGknm.image);

    formData.append("dynamicFields", JSON.stringify(dynamicFields));

    const method = newGknm.id ? "PUT" : "POST";
    const url = newGknm.id
      ? `${baseUrl}specialities/${newGknm.id}`
      : `${baseUrl}specialities`;

    fetch(url, {
      method,
      body: formData, 
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            
            const errorMessage = error.errors ? error.errors.join("\n") : "Error adding specialities";
            throw new Error(errorMessage);
          });
        }
        return res.json(); 
      })
      .then((res) => {
        if (res.msg === "Specialities added successfully" || res.msg === "Specialities updated successfully") {
          alert(res.msg);
          setRefreshData(prevState => !prevState);
          handleCloseModal();
        }
      })
      .catch((error) => {
        window.alert(error.message || "An unexpected error occurred");
      });
  };

  const filteredGknmRows = gknmRows.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
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

  const rowsWithIndex = getSortedRows(filteredGknmRows);

  //dynamic section

  const [dynamicFields, setDynamicFields] = useState([
   
  ]);
  
 
  return (
    <div>
      <section>
        <div className="profiled sub-pages">
          <div className="my-appac-hed">
            <div className="myappc-title">
              <p>Specialities</p>
            </div>
          </div>
          <div className="rpt-wrp">
            <div className="report-sts">
              <div className="w-table-cwrp">
              <div className="d-flex  justify-content-between gap-3 flex-wrap mb-3">
               

                {/* Search Box */}
                <div className="search-boxdiv">
                  <div className="search">
                    <form>
                      <input
                        type="text"
                        className="search-box"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </form>
                  </div>
                </div>
                <div
                  className=""
                  style={{ float: "right", position: "relative", zIndex: 1 }}
                >
                  <button className="d-btntyp1" onClick={handleAddSpecialities}>Add Specialities</button>
                </div>
                </div>


                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={rowsWithIndex}
                    columns={gknmColumns}
                    pageSize={10}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    components={{
                      Toolbar: GridToolbar,
                    }}
                    sortModel={sortModel}
                    columnVisibilityModel={columnVisibilityModel} // Add column visibility model
                    onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
                  />
                </div>
              </div>

              {/* Export Buttons */}
              <div className="d-export-buttons">
                <button className="d-btntyp1" onClick={handleExportExcel}>Export to Excel</button>
                <button className="d-btntyp2" onClick={handleExportPDF}>Export to PDF</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Adding/Editing specialities */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{ overlay: { zIndex: 99 } }}
      >
        <h2>{newGknm.id ? "Edit Specialities" : "Add Specialities"}</h2>
        <form onSubmit={handleFormSubmit} id="specialitiesForm" encType="multipart/form-data">
        <div className="row  form-input-wrp">
            {/* Input Fields */}
            <div className="form-div">
              <label>
                Title:</label>
                <input
                  type="text"
                  name="title"
                  value={newGknm.title}
                  onChange={(e) =>
                    setNewGknm({ ...newGknm, title: e.target.value })
                  }
                />
        
            </div>
            <div className="form-div">
              <label>
                Sub Title:</label>
                <input
                  type="text"
                  name="subtitle"
                  value={newGknm.subtitle}
                  onChange={(e) =>
                    setNewGknm({ ...newGknm, subtitle: e.target.value })
                  }
                />
         
            </div>
         
            <div className="form-div">
              <label>
                Image:</label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setNewGknm({ ...newGknm, image: e.target.files[0] })
                  }
                  accept="image/webp"
                />
            </div>

            <div className="form-div">
              <label>
                Status:</label>
                <select
                  value={newGknm.status}
                  onChange={(e) =>
                    setNewGknm({ ...newGknm, status: e.target.value })
                  }
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
            </div>
            <div className="col-lg-12 model-button-wrp">
              <button  className="d-mbtntyp-1"  type="submit">{newGknm.id ? "Update" : "Add"}</button>
              <button  className="d-mbtntyp-2" type="button" onClick={handleCloseModal}>
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
