import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';

const Enquierydetails= () => {
  const [statusFilter, setStatusFilter] = useState('');
  const [search, setSearch] = useState('');
  const enquiries = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      subject: 'Course Inquiry',
      message: 'I want to know about the courses offered.',
      date: '2025-01-01',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '9876543210',
      subject: 'Admission Process',
      message: 'What is the admission process?',
      date: '2025-01-02',
      status: 'Approved',
    },
  ];

  const handleApprove = (id) => {
    alert('Enquiry Approved!');
    // Update status logic
  };

  const handleReject = (id) => {
    alert('Enquiry Rejected!');
    // Update status logic
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' , fontSize:"medium" , marginTop:"50px" }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center', color: '#1976d2' }}>
        Enquiry Management Dashboard
      </Typography>

      {/* Filters */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 300 }}
        />
      </Box>

      {/* Enquiry Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Subject</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enquiries.map((enquiry) => (
              <TableRow key={enquiry.id}>
                <TableCell>{enquiry.id}</TableCell>
                <TableCell>{enquiry.name}</TableCell>
                <TableCell>{enquiry.email}</TableCell>
                <TableCell>{enquiry.phone}</TableCell>
                <TableCell>{enquiry.subject}</TableCell>
                <TableCell>{enquiry.date}</TableCell>
                <TableCell>{enquiry.status}</TableCell>
                <TableCell align="center">
                  {enquiry.status === 'Pending' && (
                    <>
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ marginRight: 2 }}
                        onClick={() => handleApprove(enquiry.id)}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleReject(enquiry.id)}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Enquierydetails;
