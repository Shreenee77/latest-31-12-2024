import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addstaff = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0])); // Display selected image
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStaff = { name, designation, mobile, email, address, joiningDate, photo };
    // Handle the logic to add the new staff (e.g., API call)
    console.log(newStaff);
    navigate('staffdetails'); // Redirect to the staff list page after adding
  };

  return (
    <div className="add-staff-form">
      <h2>Add New Staff</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Designation:</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Joining Date:</label>
          <input type="date" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {photo && <img src={photo} alt="Staff Preview" className="photo-preview" />}
        </div>
        <button type="submit">Add Staff</button>
      </form>
    </div>
  );
};

export default Addstaff;
