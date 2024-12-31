import React from "react";

const Userdetails = () => {
  const userData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      address: "Chennai, Tamil Nadu",
      mobileNo: "9876543210",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "Madurai, Tamil Nadu",
      mobileNo: "9123456789",
    },
    {
      id: 3,
      name: "Arvind Kumar",
      email: "arvind.kumar@example.com",
      address: "Coimbatore, Tamil Nadu",
      mobileNo: "9865321478",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>User Registration Details</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>#</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>User ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Address</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={user.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{index + 1}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.email}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.address}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.mobileNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userdetails;
