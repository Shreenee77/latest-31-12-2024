import React, { useState, useRef, useEffect } from "react";

import { PiCaretUpDownFill } from "react-icons/pi";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const Transactiondetails = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [actionMenuVisible, setActionMenuVisible] = useState(null);
  const dropdownRef = useRef(null);


  const transactions = [
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
  ];

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const toggleActionMenu = (id) => {
    setActionMenuVisible(actionMenuVisible === id ? null : id);
  };
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActionMenuVisible(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="transaction-details-container">
      <h1>Transaction Details</h1>
      <input
        className=""
        type="checkbox"
        style={{ color: "blue", width: "30px", height: "30px" }}
        onChange={handleSelectAll}
      />
      <table className="transaction-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                style={{ color: "blue", width: "30px", height: "30px" }}
                onChange={handleSelectAll}
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
          {transactions.map((transaction, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(transaction.id)}
                    onChange={() => handleSelectRow(transaction.id)}
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
                  <div className="action-menu-container" ref={dropdownRef}>
                    <BsThreeDotsVertical
                      className="action-icon"
                      onClick={() => toggleActionMenu(transaction.id)}
                    />
                    {actionMenuVisible === transaction.id && (
                      <div className="action-menu-dropdown">
                        <button
                          onClick={() => console.log("Edit", transaction.id)}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => console.log("Delete", transaction.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactiondetails;
