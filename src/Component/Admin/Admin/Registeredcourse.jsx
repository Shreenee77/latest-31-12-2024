import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Registeredcourse = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  useEffect(() => {
    // Fetch the list of registered courses from the backend
    const fetchRegisteredCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3016/api/get-registered-courses');
        setRegisteredCourses(response.data);
      } catch (error) {
        console.error("Error fetching registered courses", error);
      }
    };

    fetchRegisteredCourses();
  }, []);

  return (
    <div className="registered-courses">
      <h2>Registered Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {registeredCourses.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.course}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Registeredcourse;
