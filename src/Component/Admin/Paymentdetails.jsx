import React from 'react';

const Paymentdetails = () => {
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
      name: ' Kumar',
      department: 'Electronics',
      totalFees: 55000,
      paidAmount: 55000,
      balance: 0,
      paymentDate: '2024-12-20',
    },
  ];

  return (
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
  );
};

export default Paymentdetails;
