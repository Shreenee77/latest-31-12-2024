import React from "react";

const Dashboard = () => {
  const data = [
    {
      title: "Total Students",
      value: "450",
      increase: "45%",
      period: "28 Days",
      icon: "👨‍🎓",
    },
    {
      title: "New Students",
      value: "155",
      increase: "40%",
      period: "28 Days",
      icon: "🆕",
    },
    {
      title: "Total Course",
      value: "10",
      increase: "85%",
      period: "28 Days",
      icon: "📚",
    },
    {
      title: "Fees Collection",
      value: "₹13,921",
      increase: "50%",
      period: "28 Days",
      icon: "💰",
    },
  ];

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            margin: "10px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease",
          }}
        >
          <div style={{ fontSize: "40px", marginBottom: "10px" }}>{item.icon}</div>
          <h3 style={{ fontSize: "18px", color: "#333" }}>{item.title}</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#4CAF50" }}>{item.value}</p>
          <p style={{ fontSize: "14px", color: "#888" }}>
            {item.increase} increase in {item.period}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
