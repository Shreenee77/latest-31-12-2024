import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Divider,
    Button,
    Modal,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Studentcourse = () => {
  const courses = [
    "Certificate ",
    "Diploma ",
    "Undergraduate ",
    "Postgraduate ",
    "Special Training ",
  ];

  const studentData = [
    {
      name: "John Doe",
      gender: "Male",
      dob: "2001-05-12",
      course: "Vocal",
      phone: "9876543210",
      email: "john@example.com",
      parentName: "Michael Doe",
      nationality: "Indian",
      religion: "Christianity",
      caste: "General",
      address: "123 Main Street, City",
      aadharNumber: "1234 5678 9101",
    },
    {
      name: "Jane Smith",
      gender: "Female",
      dob: "2002-03-15",
      course: "Violin",
      phone: "9876543211",
      email: "jane@example.com",
      parentName: "Emma Smith",
      nationality: "Indian",
      religion: "Hinduism",
      caste: "OBC",
      address: "456 Elm Street, City",
      aadharNumber: "2234 5678 9101",
    },
  ];

  const courseStats = [15, 12, 18, 10, 8]; // Number of students in each course
  const genderStats = [20, 15]; // Male and Female counts

  const navigate = useNavigate();
  
  const handleViewClick = (student) => {
    navigate("/student-details", { state: student });
  };

  const [open, setOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleOpen = (student) => {
    setCurrentStudent(student);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleApprove = () => {
    console.log("Approved:", currentStudent.name);
    alert('Approved');
    handleClose();
  };
  
  const handleReject = () => {
    console.log("Rejected:", currentStudent.name);
    handleClose();
  };

  return (
    <Box sx={{ color: "white", minHeight: "100vh", padding: 2 }}>
      <Grid container spacing={2}>
        {/* Top Summary Cards */}
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ background: 'linear-gradient(to right, #003751, #36A2EB)', textAlign: "center", color:"white" }}>
              <CardContent>
                <Typography variant="h6" style={{ fontSize:"20px", font:"initial" }}>{course}</Typography>
                <Typography variant="h4" style={{ fontSize:"18px", font:"initial" }}>{courseStats[index]}</Typography>
                <Typography style={{ fontSize:"20px", font:"initial" }}>Total Students</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Gender Distribution */}
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3, background: 'transparent' }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ color: "#003751", marginBottom: 2 }}>Gender Distribution</Typography>
              <Pie
                data={{
                  labels: ["Male", "Female"],
                  datasets: [
                    {
                      data: genderStats,
                      backgroundColor: ["#003751", "#36A2EB"],
                      borderColor: "#fff",
                      borderWidth: 2,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        color: "#003751",
                      },
                    },
                  },
                  responsive: true,
                  maintainAspectRatio: true,
                  animation: {
                    animateScale: true,
                    animateRotate: true,
                  },
                }}
                height={300}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Course Distribution */}
        <Grid item xs={12} md={6}>
          <Card sx={{ background: 'linear-gradient(to right, #003751, #36A2EB)', padding: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ color: "#fff", marginBottom: 2 }}>Course Enrollment Statistics</Typography>
              <Bar
                data={{
                  labels: courses,
                  datasets: [
                    {
                      label: "Number of Students",
                      data: courseStats,
                      backgroundColor: "#36A2EB",
                      borderRadius: 5,
                      barThickness: 40,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                  },
                  responsive: true,
                  maintainAspectRatio: true,
                  scales: {
                    x: {
                      ticks: {
                        color: "#fff",
                        font: { size: 12 },
                        maxRotation: 0,
                        minRotation: 0,
                        autoSkip: false,
                      },
                      title: {
                        display: true,
                        text: "Courses",
                        color: "#fff",
                        font: { size: 14, weight: "bold" },
                      },
                    },
                    y: {
                      ticks: {
                        color: "#fff",
                        font: { size: 12 },
                        beginAtZero: true,
                      },
                      title: {
                        display: true,
                        text: "Number of Students",
                        color: "#fff",
                        font: { size: 14, weight: "bold" },
                      },
                    },
                  },
                }}
                height={220}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Student Details Table */}
        <Grid item xs={12}>
          <Card sx={{ background: 'linear-gradient(to right, #003751, #36A2EB)' }}>
            <CardContent>
              <Typography variant="h6" style={{ fontSize: "medium", color: "#fff" }}>Student Registrations</Typography>
              <Divider sx={{ marginY: 2 }} />
              <TableContainer>
                <Table sx={{ backgroundColor: "#003751" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: "white", fontSize: "17px" }}>Name</TableCell>
                      <TableCell sx={{ color: "white", fontSize: "17px" }}>Gender</TableCell>
                      <TableCell sx={{ color: "white", fontSize: "17px" }}>DOB</TableCell>
                      <TableCell sx={{ color: "white", fontSize: "17px" }}>Course Applied</TableCell>
                      <TableCell sx={{ color: "white", fontSize: "17px" }}>Phone Number</TableCell>
                      <TableCell sx={{ color: "white", fontSize: "17px" }}>Email</TableCell>
                      <TableCell sx={{ color: "white", fontSize: "17px" }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentData.map((student, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ color: "#fff", fontSize: "14px" }}>{student.name}</TableCell>
                        <TableCell sx={{ color: "#fff", fontSize: "14px" }}>{student.gender}</TableCell>
                        <TableCell sx={{ color: "#fff", fontSize: "14px" }}>{student.dob}</TableCell>
                        <TableCell sx={{ color: "#fff", fontSize: "14px" }}>{student.course}</TableCell>
                        <TableCell sx={{ color: "#fff", fontSize: "14px" }}>{student.phone}</TableCell>
                        <TableCell sx={{ color: "#fff", fontSize: "14px" }}>{student.email}</TableCell>
                        <TableCell>
                          <Button variant="contained" color="warning" size="medium" onClick={() => handleOpen(student)}>
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Modal for Student Details */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", maxWidth: "600px", margin: "auto" }}>
          <Typography variant="h6" sx={{ textAlign: "center", marginBottom: 2 }}>Student Details</Typography>
          <TextField label="Name" value={currentStudent?.name} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <TextField label="Gender" value={currentStudent?.gender} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <TextField label="DOB" value={currentStudent?.dob} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <TextField label="Course" value={currentStudent?.course} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <TextField label="Phone" value={currentStudent?.phone} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <TextField label="Email" value={currentStudent?.email} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <TextField label="Parent Name" value={currentStudent?.parentName} fullWidth margin="normal" InputProps={{ readOnly: true }} />
          <TextField label="Aadhar Number" value={currentStudent?.aadharNumber} fullWidth margin="normal" InputProps={{ readOnly: true }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <Button variant="contained" color="success" onClick={handleApprove}>Approve</Button>
            <Button variant="contained" color="error" onClick={handleReject}>Reject</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Studentcourse;
