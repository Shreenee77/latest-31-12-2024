import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";
const Userdetails = () => {
  const location = useLocation();
  const userData = [
    {
      id: 1001,
      name: "John Doe",
      email: "john.doe@example.com",
      address: "Chennai, Tamil Nadu",
      mobileNo: "9876543210",
    },
    {
      id: 1002,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "Madurai, Tamil Nadu",
      mobileNo: "9123456789",
    },
    {
      id: 1003,
      name: "Arvind Kumar",
      email: "arvind.kumar@example.com",
      address: "Coimbatore, Tamil Nadu",
      mobileNo: "9865321478",
    },
    {
      id: 1004,
      name: "Doe",
      email: "doe.doe@example.com",
      address: "Chennai",
      mobileNo: "876756210",
    },
    {
      id: 1005,
      name: "Smith",
      email: "smith@example.com",
      address: "Madurai",
      mobileNo: "913453789",
    },
    {
      id: 1006,
      name: "Kumar",
      email: "kumar@example.com",
      address: "Coimbatore",
      mobileNo: "986345478",
    },
    {
      id: 1007,
      name: "Ravi",
      email: "ravi@example.com",
      address: "Trichy",
      mobileNo: "8123456780",
    },
    {
      id: 1008,
      name: "Mohan",
      email: "mohan@example.com",
      address: "Salem",
      mobileNo: "9234567890",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Calculate index for current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  // Pagination buttons logic
  const totalPages = Math.ceil(userData.length / usersPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <h2><FiUser style={{ marginRight: "10px", color: "#035069" }} />{location.pathname.replace("/", "") || "Home"}</h2>
      <div className="payment-details-container">
        <h3 style={{color:"#035069"}}>User Registration Details</h3>

        <table className="payment-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{indexOfFirstUser + index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.mobileNo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            style={{ margin: "0 5px" }}
          >
            Previous
          </button>
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                margin: "0 5px",
                backgroundColor: currentPage === page ? "#4CAF50" : "#f2f2f2",
                color: currentPage === page ? "#fff" : "#555",
              }}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            style={{ margin: "0 5px" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Userdetails;
