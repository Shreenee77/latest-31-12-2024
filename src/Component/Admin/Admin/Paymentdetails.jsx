import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdPayments } from "react-icons/md";

const Paymentdetails = () => {
  const location = useLocation();
  
  // Extract the path from the location to display dynamic titles
  const currentPath = location.pathname.replace("/", "");

  // Check if the current path matches the 'Paymentdetails' submenu or another part of the route
  const title = currentPath.includes("paymentdetails") ? "Payment Details" : currentPath || "Home";

  const paymentData = [
    {
      studentId: 'STU101',
      name: 'Arun',
      department: 'Computer Science',
      totalFees: 50000,
      paidAmount: 40000,
      balance: 10000,
      paymentDate: '2024-12-25',
    },
    {
      studentId: 'STU102',
      name: 'Kumar',
      department: 'Electronics',
      totalFees: 55000,
      paidAmount: 55000,
      balance: 0,
      paymentDate: '2024-12-20',
    },
  ];

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
              <th>Student ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Total Fees</th>
              <th>Paid Amount</th>
              <th>Balance</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={index}>
                <td>{payment.studentId}</td>
                <td>{payment.name}</td>
                <td>{payment.department}</td>
                <td>{payment.totalFees}</td>
                <td>{payment.paidAmount}</td>
                <td>{payment.balance}</td>
                <td>{payment.paymentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Paymentdetails;
