const [refreshData, setRefreshData] = useState(false); // State to trigger data refresh

const handleFormSubmit = (e) => {
  e.preventDefault();
  
  // Prepare form data
  const formData = new FormData();
  formData.append("name", newDoctor.name);
  formData.append("qualification", newDoctor.qualification);
  formData.append("department", newDoctor.department);
  formData.append("status", newDoctor.status);

  // If an image is selected, add it to formData
  if (newDoctor.image) formData.append("image", newDoctor.image);

  // Add dynamic fields data
  formData.append("dynamicFields", JSON.stringify(dynamicFields));

  // If other fields like new_op, review_op, etc., are provided, add them
  if (newDoctor.new_op) formData.append("new_op", newDoctor.new_op);
  if (newDoctor.review_op) formData.append("review_op", newDoctor.review_op);
  if (newDoctor.experience) formData.append("experience", newDoctor.experience);
  if (newDoctor.expertise) formData.append("expertise", newDoctor.expertise);
  if (newDoctor.languages) formData.append("languages", newDoctor.languages);

  // Determine the method (POST for adding, PUT for updating)
  const method = newDoctor.id ? "PUT" : "POST";
  const url = newDoctor.id
    ? `http://localhost:8000/test/api/doctor/${newDoctor.id}`
    : "http://localhost:8000/test/api/doctor";

  // Perform the request
  fetch(url, {
    method,
    body: formData, // Send FormData instead of JSON
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.msg === "Doctor added successfully" || res.msg === "Doctor updated successfully") {
        alert(res.msg);
        setIsModalOpen(false); // Close the modal after submit
        setRefreshData(prevState => !prevState); // Trigger data refresh by flipping the state
      }
    })
    .catch((error) => {
      alert(error.message || "An unexpected error occurred");
    });
};

useEffect(() => {
  // Fetch doctor data when the refreshData state changes
  fetch("http://localhost:8000/test/api/doctor")
    .then((res) => res.json())
    .then((res) => {
      if (res.data) {
        const formattedDoctors = res.data.map((item) => ({
          id: item.id,
          name: item.name,
          qualification: item.qualification,
          department: item.department,
          new_op: item.new_op,
          review_op: item.review_op,
          experience: item.experience,
          expertise: item.expertise,
          languages: item.languages,
          status: item.status,
          doctordetails: Object.values(item.doctordetails).map((detail) => ({
            id: detail.id,
            title: detail.title,
            content: detail.content,
            titlestatus: detail.titlestatus,
          })),
        }));
        setDoctorRows(formattedDoctors); // Update the doctor rows in the table
      }
    })
    .catch((error) => console.error("Error fetching doctor data:", error));
}, [refreshData]); // Dependency array watches the refreshData state
