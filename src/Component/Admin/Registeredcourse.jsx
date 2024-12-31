import React from 'react';
import './Registeredcourse.css';

const Registeredcourse = () => {
  const registeredCourses = [
    { name: 'Karthik', gender: 'Male', course: 'Music Theory', phone: '9876543210', email: 'karthik@example.com' },
    { name: 'Priya', gender: 'Female', course: 'Vocal Training', phone: '8765432109', email: 'priya@example.com' },
    { name: 'Ramesh', gender: 'Male', course: 'Instrumental', phone: '7654321098', email: 'ramesh@example.com' },
    { name: 'Divya', gender: 'Female', course: 'Folk Music', phone: '6543210987', email: 'divya@example.com' },
    { name: 'Arun', gender: 'Male', course: 'Classical Music', phone: '5432109876', email: 'arun@example.com' },
  ];

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
