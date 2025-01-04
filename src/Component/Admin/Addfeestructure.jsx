import React, { useState } from 'react';

const AddFeeStructure = () => {
  const [feeData, setFeeData] = useState({
    courseName: '',
    grade:'',
    indianFees: '',
    foreignFees: '',
  });

  const handleChange = (e) => {
    setFeeData({ ...feeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feeData);
    // API call to submit fee structure
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>Add Fee Structure</h2>
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Grade</label>
          <input
            type="text"
            name="grade"
            value={feeData.grade}
            onChange={handleChange}
            placeholder="Enter Grade"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Course Name</label>
          <input
            type="text"
            name="courseName"
            value={feeData.courseName}
            onChange={handleChange}
            placeholder="Enter course name"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Indian Students' Fees (₹)</label>
          <input
            type="number"
            name="indianFees"
            value={feeData.indianFees}
            onChange={handleChange}
            placeholder="Enter Indian fees"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Foreign Students' Fees ($)</label>
          <input
            type="number"
            name="foreignFees"
            value={feeData.foreignFees}
            onChange={handleChange}
            placeholder="Enter Foreign fees"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Add Fee Structure
        </button>
      </form>
    </div>
  );
};

export default AddFeeStructure;
