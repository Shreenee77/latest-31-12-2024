import React, { useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5"; // Import down arrow icon
import { PiCaretUpDownFill } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { jsPDF } from "jspdf"; // Import jsPDF
import "jspdf-autotable"; // Import jsPDF AutoTable plugin

const Transactiondetails = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [invoiceId, setInvoiceId] = useState("");
  const [transactions, setTransactions] = useState([
    {
      id: "#123412451",
      invoice: "#INV123",
      date: "June 1, 2024, 08:22 AM",
      recipient: "Julia Esteh",
      photo: "https://via.placeholder.com/40",
      amount: "$128.89",
      type: "Income",
      location: "Bangladesh, India",
      status: "Canceled",
    },
    {
      id: "#123412452",
      invoice: "#INV124",
      date: "June 2, 2024, 10:15 AM",
      recipient: "John Doe",
      photo: "https://via.placeholder.com/40",
      amount: "$200.00",
      type: "Expense",
      location: "Chennai, India",
      status: "Completed",
    },
  ]);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [actionMenuVisible, setActionMenuVisible] = useState(null);
  const [editData, setEditData] = useState(null);
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(transactions.map((transaction) => transaction.id)); 
    }
    setSelectAll(!selectAll);
  };
  const handleRowSelect = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };
  const handleActionMenuClick = (transactionId) => {
    setActionMenuVisible((prevState) =>
      prevState === transactionId ? null : transactionId
    );
  };

  const handleEdit = (transaction) => {
    setEditData({ ...transaction });
    setActionMenuVisible(null); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === editData.id ? editData : transaction
    );
    setTransactions(updatedTransactions);
    setEditData(null);
  };

  const handleDownloadClick = () => {
    setShowDownloadPopup(true);
  };

  const handleClosePopup = () => {
    setShowDownloadPopup(false);
    setInvoiceId("");
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Transaction Details", 14, 20);

 
    const headers = [
      "ID", "Invoice", "Date", "Recipient", "Amount", "Location", "Status"
    ];

    // Filter selected transactions for download
    const selectedTransactions = transactions.filter((transaction) =>
      selectedRows.includes(transaction.id)
    );

    const data = selectedTransactions.map(transaction => [
      transaction.id,
      transaction.invoice,
      transaction.date,
      transaction.recipient,
      transaction.amount,
      transaction.location,
      transaction.status
    ]);

    // Add table to PDF
    doc.autoTable({
      head: [headers],
      body: data,
      startY: 30,
      theme: "grid",
    });

    // Save PDF
    doc.save("transaction_details.pdf");
    handleClosePopup();
  };

  return (
    <>
      <h2>
        <GrTransaction style={{ marginRight: "10px", color: "#035069" }} />
        alldetails/Transaction Details
      </h2>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button  style={{ marginRight: "10px" }}  >
          Invoice Details <IoArrowDownCircleOutline/>
        </button>
        <button onClick={handleDownloadClick}>
          Download <IoArrowDownCircleOutline style={{ marginLeft: "5px" }} />
        </button>
      </div>

      {showDownloadPopup && (
        <div className="download-popup">
          <h2>Download Transaction Details</h2>
          <label>Invoice ID:</label>
          <input
            type="text"
            value={invoiceId}
            onChange={(e) => setInvoiceId(e.target.value)}
          />
          <div>
            <button onClick={handleDownloadPDF}>Download PDF</button>
            <button onClick={handleClosePopup}>Cancel</button>
          </div>
        </div>
      )}

      <div className="transaction-details-container">
        <h1>Transaction Details</h1>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectAll}
                  style={{
                    color: "blue",
                    width: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </th>
              <th>
                ID <PiCaretUpDownFill />
              </th>
              <th>
                Invoice <PiCaretUpDownFill />
              </th>
              <th>
                Date <PiCaretUpDownFill />
              </th>
              <th>
                Recipient <PiCaretUpDownFill />
              </th>
              <th>
                Amount <PiCaretUpDownFill />
              </th>
              <th>
                Location <PiCaretUpDownFill />
              </th>
              <th>
                Status <PiCaretUpDownFill />
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="transaction-row"
                style={{
                  backgroundColor: selectedRows.includes(transaction.id)
                    ? "#f0f8ff"
                    : "transparent",
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(transaction.id)}
                    onChange={() => handleRowSelect(transaction.id)}
                    style={{ justifyContent: "center", alignItems: "center" }}
                  />
                </td>
                <td>{transaction.id}</td>
                <td>{transaction.invoice}</td>
                <td>{transaction.date}</td>
                <td>
                  <div className="recipient">
                    <img
                      src={transaction.photo}
                      alt="Recipient"
                      className="recipient-photo"
                    />
                    {transaction.recipient}
                  </div>
                </td>
                <td>{transaction.amount}</td>
                <td>{transaction.location}</td>
                <td
                  className={`status ${
                    transaction.status === "Pending"
                      ? "status-pending"
                      : transaction.status === "Completed"
                      ? "status-completed"
                      : "status-canceled"
                  }`}
                >
                  {transaction.status}
                </td>
                <td>
                  <div className="action-menu-container">
                    <BsThreeDotsVertical
                      className="action-icon"
                      onClick={() => handleActionMenuClick(transaction.id)}
                    />
                    {actionMenuVisible === transaction.id && (
                      <div className="action-menu-dropdown">
                        <button onClick={() => handleEdit(transaction)}>
                          Edit
                        </button>
                        <button>Delete</button>
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
            <h2>Edit Transaction</h2>
            <form onSubmit={handleSaveEdit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Invoice:</label>
                  <input
                    type="text"
                    name="invoice"
                    value={editData.invoice}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Amount:</label>
                  <input
                    type="text"
                    name="amount"
                    value={editData.amount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Recipient:</label>
                  <input
                    type="text"
                    name="recipient"
                    value={editData.recipient}
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

export default Transactiondetails;
