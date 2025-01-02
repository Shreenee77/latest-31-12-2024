import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";
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
      title: "Yearly Collection",
      value: "₹13,921",
      increase: "51%",
      color: "#4CAF50",
    },
  ];

  const chartDataSets = {
    Yearly: {
      labels: ["2020", "2021", "2022", "2023"],
      data: [1200, 1500, 2000, 2500],
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
        borderWidth: 1,
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
  const monthlyEarningsOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Total Earnings" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `₹${value}`, // Add currency symbol
        },
      },
    },
  };
  const monthlyEarningsData = {
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
    datasets: [
      {
        label: "Monthly Earnings (₹)",
        data: [
          12000, 15000, 18000, 20000, 22000, 25000, 27000, 30000, 28000, 26000,
          24000, 20000,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data2 = [
    {
      platform: "Twitter",
      icon: <FaTwitter style={{ color: "#1DA1F2" }} />,
      likes: "12,281",
      growth: "+7.2%",
      target: "35,098",
      duration: "350",
    },
    {
      platform: "Facebook",
      icon: <FaFacebook style={{ color: "#1877F2" }} />,
      likes: "11,200",
      growth: "+6.2%",
      target: "34,185",
      duration: "800",
    },
    {
      platform: "Google",
      icon: <FaGoogle style={{ color: "#DB4437" }} />,
      likes: "10,500",
      growth: "+5.9%",
      target: "25,998",
      duration: "900",
    },
  ];

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

      <div className="row">
        <div className="col-sm-6 statistics">
          {/* Existing Statistics Bar Chart */}
          <Bar
            data={{
              labels: ["2020", "2021", "2022", "2023"],
              datasets: [
                {
                  label: `Statistics (${filter})`,
                  data: [1200, 1500, 2000, 2500],
                  backgroundColor: ["#4CAF50", "#E04446", "#FFC107", "#4CAF50"],
                  borderColor: ["#388E3C", "#B71C1C", "#FFA000", "#388E3C"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: {
                  display: true,
                  text: `Dashboard Statistics - ${filter}`,
                },
              },
            }}
          />
        </div>
        <div className="col-sm-6">
          {/* Monthly Earnings Bar Chart */}
          <Bar data={monthlyEarningsData} options={monthlyEarningsOptions} />
        </div>
      </div>
      <div className="dashboard-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="dashboard-container">
              {data2.map((item, index) => (
                <div className="dashboard-card" key={index}>
                  <h3 className="dashboard-title">{item.title}</h3>
                  <div className="dashboard-row">
                    <div
                      className="dashboard-icon"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="dashboard-value">{item.platform}</div>
                    <div className="dashboard-increase">{item.likes}</div>
                  </div>
                  {/* <div className="progress-bar">
                    <p
                      style={{
                        color: item.growth.startsWith("+")
                          ? "#4CAF50"
                          : "#E04446",
                      }}
                    >
                      {item.growth} Total Likes
                    </p>
                    <p>Target: {item.target}</p>
                    <p>Duration: {item.duration} days</p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
