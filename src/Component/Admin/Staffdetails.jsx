import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Staffdetails = () => {
  const [staffData, setStaffData] = useState([]);
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'grid'
  const [currentPage, setCurrentPage] = useState(1);
  const [staffPerPage] = useState(5);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    // Fetch staff data (for now, using static data)
    setStaffData([
      {
        id: 1,
        name: "John Doe",
        designation: "Manager",
        mobile: "1234567890",
        email: "john@example.com",
        address: "123 Street",
        joiningDate: "2022-01-01",
        photo: "../../assets/image/img10.jpg", // Example photo URL
      },
      {
        id: 2,
        name: "Jane Smith",
        designation: "Developer",
        mobile: "9876543210",
        email: "jane@example.com",
        address: "456 Avenue",
        joiningDate: "2021-03-15",
        photo: "../../assets/image/img10.jpg", // Example photo URL
      },
      {
        id: 1,
        name: "John Doe",
        designation: "Manager",
        mobile: "1234567890",
        email: "john@example.com",
        address: "123 Street",
        joiningDate: "2022-01-01",
        photo: "../../assets/image/img10.jpg", // Example photo URL
      },
      {
        id: 2,
        name: "Jane Smith",
        designation: "Developer",
        mobile: "9876543210",
        email: "jane@example.com",
        address: "456 Avenue",
        joiningDate: "2021-03-15",
        photo: "../../assets/image/img10.jpg", // Example photo URL
      },
      {
        id: 1,
        name: "John Doe",
        designation: "Manager",
        mobile: "1234567890",
        email: "john@example.com",
        address: "123 Street",
        joiningDate: "2022-01-01",
        photo: "../../assets/image/img10.jpg", // Example photo URL
      },
      {
        id: 2,
        name: "Jane Smith",
        designation: "Developer",
        mobile: "9876543210",
        email: "jane@example.com",
        address: "DFGD Avenue",
        joiningDate: "2021-03-15",
        photo: "../../assets/image/img10.jpg", // Example photo URL
      },
    ]);
  }, []);

  const indexOfLastStaff = currentPage * staffPerPage;
  const indexOfFirstStaff = indexOfLastStaff - staffPerPage;
  const currentStaff = staffData.slice(indexOfFirstStaff, indexOfLastStaff);

  const toggleMenu = (id) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  const handleDelete = (staffId) => {
    setStaffData(staffData.filter((staff) => staff.id !== staffId));
  };

  const paginate = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(staffData.length / staffPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="staff-list">
      {/* Header with View Toggle and Add Staff Button */}
      <div className="staff-header">
        <div className="view-toggle">
          <button
            className={`view-toggle-button ${
              viewMode === "list" ? "active" : ""
            }`}
            onClick={() => setViewMode("list")}
          >
            List View
          </button>
          <button
            className={`view-toggle-button ${
              viewMode === "grid" ? "active" : ""
            }`}
            onClick={() => setViewMode("grid")}
          >
            Grid View
          </button>
        </div>
        {/* Add New Staff Button */}
        <button
          className="add-staff-button"
          onClick={() => navigate("addstaff")}
        >
          Add New Staff
        </button>
      </div>

      {/* List View Layout */}
      {viewMode === "list" && (
        <table className="staff-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Joining Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentStaff.map((staff) => (
              <tr key={staff.id}>
                <td>
                  <img
                    src={staff.photo}
                    alt={`${staff.name}'s Profile`}
                    className="staff-profile-photo"
                  />
                </td>
                <td>{staff.name}</td>
                <td>{staff.designation}</td>
                <td>{staff.mobile}</td>
                <td>{staff.email}</td>
                <td>{staff.address}</td>
                <td>{staff.joiningDate}</td>
                <td>
                  <Link to={`/edit-staff/${staff.id}`}>Edit</Link>
                  <button onClick={() => handleDelete(staff.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Grid View Layout */}
      {viewMode === "grid" && (
        <div className="staff-grid">
          {currentStaff.map((staff) => (
            <div key={staff.id} className="staff-item">
              <div className="staff-photo-wrapper">
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="staff-photo"
                />
                <div className="menu-container">
                  <button
                    className="menu-button"
                    onClick={() => toggleMenu(staff.id)}
                  >
                    ...
                  </button>
                  {menuOpen === staff.id && (
                    <div
                      className="menu-options"
                      onMouseLeave={() => setMenuOpen(null)}
                    >
                      <span
                        className="menu-text"
                        onClick={() => navigate(`editstaff/${staff.id}`)}
                      >
                        Edit
                      </span>
                      <span
                        className="menu-text"
                        onClick={() => handleDelete(staff.id)}
                      >
                        Delete
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="staff-details">
                <p>
                  <strong>Name:</strong> {staff.name}
                </p>
                <p>
                  <strong>Designation:</strong> {staff.designation}
                </p>
                <p>
                  <strong>Mobile:</strong> {staff.mobile}
                </p>
                <p>
                  <strong>Email:</strong> {staff.email}
                </p>
                <p>
                  <strong>Address:</strong> {staff.address}
                </p>
                <p>
                  <strong>Joining Date:</strong> {staff.joiningDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        {/* Previous Button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "inactive" : "active"}
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * staffPerPage >= staffData.length}
          className={
            currentPage * staffPerPage >= staffData.length
              ? "inactive"
              : "active"
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Staffdetails;
