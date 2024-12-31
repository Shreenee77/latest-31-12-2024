import React, { useState } from "react";

const Addcourse = () => {
  const initialFormData = {
    courseName: "",
    courseCode: "",
    courseDetails: "",
    startDate: "",
    duration: "",
    price: "",
    professorName: "",
    maxStudents: "",
    contactNumber: "",
    coursePhoto: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, coursePhoto: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  const handleCancel = () => {
    setFormData(initialFormData); // Reset formData to its initial state
  };

  return (
    <div className="course-add-container">
      <h1>Course Details</h1>
      <form className="course-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Code</label>
          <input
            type="text"
            name="courseCode"
            value={formData.courseCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Details</label>
          <textarea
            name="courseDetails"
            value={formData.courseDetails}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="e.g., 6 months"
            required
          />
        </div>
        <div className="form-group">
          <label>Course Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Professor Name</label>
          <input
            type="text"
            name="professorName"
            value={formData.professorName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Maximum Students</label>
          <input
            type="number"
            name="maxStudents"
            value={formData.maxStudents}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-btn">
            Add Course
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addcourse;
