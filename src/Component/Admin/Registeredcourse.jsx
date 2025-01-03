
  import React from "react";

  const Registeredcourse = () => {
    const registrationData = [
      {
        id: 1,
        institutionName: "Tamil Isai Sangam",
        address: "Chennai, Tamil Nadu",
        mobile: "9876543210",
        email: "tamilisai@example.com",
        dob: "1990-05-10",
        establishmentDate: "1950-01-01",
        courses: ["Music "],
        musicinstrument:"Violin",
        folkmusic:"Vocal",
        paymentMode: "Cash",
      },
      {
        id: 2,
        institutionName: "Kalaimagal Music School",
        address: "Madurai, Tamil Nadu",
        mobile: "9123456789",
        email: "kalaimagal@example.com",
        dob: "1985-08-25",
        establishmentDate: "1975-03-15",
        courses: ["Music - Thirumurai Isai" ],
        musicinstrument:"Veena",
        folkmusic:"Bharathanatyam",
        paymentMode: "Cheque/DD",
      },
      {
        id: 3,
        institutionName: "Nadha Sangamam",
        address: "Coimbatore, Tamil Nadu",
        mobile: "9865321478",
        email: "nadhasangamam@example.com",
        dob: "1970-12-01",
        establishmentDate: "1960-06-20",
        courses: ["Music"],
        musicinstrument:"Flute",
        folkmusic:"Instruments",
        paymentMode: "NEFT",
      },
      {
        id: 4,
        institutionName: "Saraswathi Music Academy",
        address: "Trichy, Tamil Nadu",
        mobile: "9001234567",
        email: "saraswathi@example.com",
        dob: "1995-07-15",
        establishmentDate: "1985-11-10",
        courses: ["Music - Thirumurai Isai"],
        musicinstrument:"Mridhangam",
        folkmusic:"Nattuvangam",
        paymentMode: "Cash",
      },
      {
        id: 5,
        institutionName: "Isai Payanam",
        address: "Salem, Tamil Nadu",
        mobile: "7890123456",
        email: "isaipayanam@example.com",
        dob: "1980-03-22",
        establishmentDate: "1970-02-25",
        courses: ["Music - Vocal"],
        musicinstrument:"Nagasvaram",
        folkmusic:"Instruments",
        paymentMode: "NEFT",
      },
    ];
  
    return (
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Registration Course Details</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>#</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Institution/Teacher Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Mobile No</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Courses</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Music Instrument</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Folk Music</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            {registrationData.map((data, index) => (
              <tr key={data.id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{index + 1}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{data.institutionName}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{data.mobile}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{data.courses.join(", ")}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{data.musicinstrument}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{data.folkmusic}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{data.paymentMode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Registeredcourse;
  