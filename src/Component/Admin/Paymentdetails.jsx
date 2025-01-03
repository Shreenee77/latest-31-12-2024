import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdPayments } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const Paymentdetails = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "");
  const title = currentPath.includes("paymentdetails")
    ? "Payment Details"
    : currentPath || "Home";
  const [paymentData, setPaymentData] = useState([
    {
      studentId: "STU101",
      name: "Arun",
      department: "Computer Science",
      totalFees: 50000,
      paidAmount: 40000,
      balance: 10000,
      paymentDate: "2024-12-25",
    },
    {
      studentId: "STU102",
      name: "Kumar",
      department: "Electronics",
      totalFees: 55000,
      paidAmount: 55000,
      balance: 0,
      paymentDate: "2024-12-20",
    },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [editData, setEditData] = useState(null);
  const [visibleRow, setVisibleRow] = useState(null); // New state for tracking visibility

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(paymentData.map((item) => item.studentId));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (studentId) => {
    if (selectedRows.includes(studentId)) {
      setSelectedRows(selectedRows.filter((id) => id !== studentId));
    } else {
      setSelectedRows([...selectedRows, studentId]);
    }
  };

  const isRowSelected = (studentId) => selectedRows.includes(studentId);

  const handleEdit = (id) => {
    const dataToEdit = paymentData.find((item) => item.studentId === id);
    setEditData(dataToEdit);
    setVisibleRow(null); // Hide dropdown after edit
  };

  const handleDelete = (id) => {
    setPaymentData(paymentData.filter((item) => item.studentId !== id));
    alert(`Student ID: ${id} deleted successfully!`);
    setVisibleRow(null); // Hide dropdown after delete
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentData((prevData) =>
      prevData.map((item) =>
        item.studentId === editData.studentId ? editData : item
      )
    );
    setEditData(null);
    alert("Data updated successfully!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <>
      <h2>
        <MdPayments style={{ marginRight: "10px", color: "#035069" }} />
        alldetails/{title}
      </h2>
      <div className="payment-details-container">
        <h1>College Payment Details</h1>
        <table className="payment-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  style={{
                    width: "50px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onChange={handleSelectAll}
                  checked={selectedRows.length === paymentData.length}
                />
              </th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Total Fees</th>
              <th>Paid Amount</th>
              <th>Balance</th>
              <th>Payment Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment) => (
              <tr key={payment.studentId}>
                <td>
                  <input
                    type="checkbox"
                    style={{
                      width: "50px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onChange={() => handleRowSelect(payment.studentId)}
                    checked={isRowSelected(payment.studentId)}
                  />
                </td>
                <td>{payment.studentId}</td>
                <td>{payment.name}</td>
                <td>{payment.department}</td>
                <td>{payment.totalFees}</td>
                <td>{payment.paidAmount}</td>
                <td>{payment.balance}</td>
                <td>{payment.paymentDate}</td>
                <td>
                  <div style={{ position: "relative" }}>
                    <BsThreeDotsVertical
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setVisibleRow(
                          visibleRow === payment.studentId ? null : payment.studentId
                        )
                      }
                    />
                    {visibleRow === payment.studentId && (
                      <div
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "0",
                          background: "#fff",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                          zIndex: "10",
                          padding: "10px",
                          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                        }}
                      >
                        <button onClick={() => handleEdit(payment.studentId)}>
                          Edit
                        </button>
                        <button
                          style={{ background: "#A01011", marginLeft: "5px" }}
                          onClick={() => handleDelete(payment.studentId)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editData && (
          <div className="edit-form">
            <h2>Edit Payment Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Department:</label>
                  <input
                    type="text"
                    name="department"
                    value={editData.department}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Total Fees:</label>
                  <input
                    type="number"
                    name="totalFees"
                    value={editData.totalFees}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Paid Amount:</label>
                  <input
                    type="number"
                    name="paidAmount"
                    value={editData.paidAmount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Payment Date:</label>
                  <input
                    type="date"
                    name="paymentDate"
                    value={editData.paymentDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit">Save Changes</button>
                <button
                  type="button"
                  onClick={() => setEditData(null)}
                  style={{ background: "#A01011", marginLeft: "5px" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Paymentdetails;
