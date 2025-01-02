import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaSortAmountUpAlt, FaSortAmountDownAlt } from "react-icons/fa";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [filter, setFilter] = useState("Yearly");

  const data = [
    {
      icon: <FaArrowUpLong />,
      icon2: <FaArrowDownLong />,
      title: "Total Students",
      value: "450",
      increase: "55%",
      period: "28 Days",
      color: "#4CAF50",
    },
    {
      icon: <FaArrowUpLong />,
      icon2: <FaArrowDownLong />,
      title: "New Students",
      value: "155",
      increase: "40%",
      color: "#E04446",
    },
    {
      icon: <MdOutlineLibraryBooks />,
      title: "Total Course",
      value: "10",
      increase: "85%",
      color: "#FFC107",
    },
    {
      icon: <FaSortAmountUpAlt />,
      icon2: <FaSortAmountDownAlt />,
      title: "Fees Collection",
      value: "₹13,921",
      increase: "51%",
      color: "#4CAF50",
    },
  ];

  // Data for different filters
  const chartDataSets = {
    Yearly: {
      labels: ["2020", "2021", "2022", "2023"],
      data: [100, 200, 300, 400],
    },
    Monthly: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      data: [200, 150, 180, 300, 250, 400, 450, 500, 350, 300, 200, 150],
    },
    Weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [50, 70, 90, 100],
    },
  };

  const chartData = {
    labels: chartDataSets[filter].labels,
    datasets: [
      {
        label: `Statistics (${filter})`,
        data: chartDataSets[filter].data,
        backgroundColor: ["#4CAF50", "#E04446", "#FFC107", "#4CAF50"],
        borderColor: ["#388E3C", "#B71C1C", "#FFA000", "#388E3C"],
        borderWidth: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: `Dashboard Statistics - ${filter}` },
    },
  };

  // New student list data
  const [students, setStudents] = useState([
    { id: 1, name: "Jens Brincker", gender: "Male", dateofbirth: "27/05/2016", address: "Chennai", phone: "9897538933", email: "aun@gmail.com", admitDate: "27/05/2016", fees: "2500", course: "Vocal" },
    { id: 2, name: "Mark Hay", gender: "Male", dateofbirth: "26/05/2018", address: "Bangalore", phone: "9887546789", email: "markhay@gmail.com", admitDate: "26/05/2018", fees: "3000", course: "Guitar" },
    { id: 3, name: "Anthony Davie", gender: "Male", dateofbirth: "21/05/2017", address: "Hyderabad", phone: "9678542345", email: "anthonydavie@gmail.com", admitDate: "21/05/2017", fees: "3500", course: "Drums" },
    { id: 4, name: "David Perry", gender: "Male", dateofbirth: "20/04/2019", address: "Mumbai", phone: "9998765432", email: "davidperry@gmail.com", admitDate: "20/04/2019", fees: "2800", course: "Piano" },
    { id: 5, name: "Sarah Smith", gender: "Female", dateofbirth: "19/06/2020", address: "Delhi", phone: "9123456789", email: "sarahsmith@gmail.com", admitDate: "19/06/2020", fees: "3200", course: "Violin" },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleEdit = (id) => {
    // Find the student by id and set it to the selectedStudent state
    const student = students.find((s) => s.id === id);
    setSelectedStudent({ ...student });
  };

  const handleChange = (e) => {
    // Update the selected student's data in the state
    const { name, value } = e.target;
    setSelectedStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Update the students array with the edited data
    setStudents((prevState) =>
      prevState.map((s) =>
        s.id === selectedStudent.id ? selectedStudent : s
      )
    );
    setSelectedStudent(null); // Clear the form after saving
  };

  return (
    <>
      <div className="row">
        <div className="dashboard-container">
          {data.map((item, index) => (
            <div className="dashboard-card" key={index}>
              <h3 className="dashboard-title">{item.title}</h3>
              <div className="dashboard-row">
                <div className="dashboard-icon" style={{ color: item.color }}>
                  {parseInt(item.increase) > 50 ? item.icon : item.icon2}
                </div>
                <div className="dashboard-value">{item.value}</div>
                <div className="dashboard-increase">{item.increase}</div>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: item.increase }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <label htmlFor="filter">Filter By: </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
        </select>
      </div>

      {/* Chart Section */}
      <div className="row">
        <div className="col-sm-6">
          <div className="statistics">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* New Student List Table */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>New Student List</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date Of Birth</th>
                    <th>Address</th>
                    <th>Mobile No</th>
                    <th>Email</th>
                    <th>Date Of Admit</th>
                    <th>Fees</th>
                    <th>Course</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.gender}</td>
                      <td>{student.dateofbirth}</td>
                      <td>{student.address}</td>
                      <td>{student.phone}</td>
                      <td>{student.email}</td>
                      <td>{student.admitDate}</td>
                      <td>{student.fees}</td>
                      <td>{student.course}</td>
                      <td>
                        <button onClick={() => handleEdit(student.id)}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Edit Form */}
              {selectedStudent && (
                <div className="edit-form">
                  <h4>Edit Student</h4>
                  <form>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={selectedStudent.name}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Gender:
                      <input
                        type="text"
                        name="professor"
                        value={selectedStudent.gender}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Date of Birth:
                      <input
                        type="text"
                        name="dateofbirth"
                        value={selectedStudent.dateofbirth}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Address:
                      <input
                        type="text"
                        name="address"
                        value={selectedStudent.address}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Mobile:
                      <input
                        type="text"
                        name="phone"
                        value={selectedStudent.phone}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="text"
                        name="email"
                        value={selectedStudent.email}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Date of Admit:
                      <input
                        type="text"
                        name="admitDate"
                        value={selectedStudent.admitDate}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Fees:
                      <input
                        type="text"
                        name="fees"
                        value={selectedStudent.fees}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Course:
                      <input
                        type="text"
                        name="course"
                        value={selectedStudent.course}
                        onChange={handleChange}
                      />
                    </label>
                    <button type="button" onClick={handleSave}>Save</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
