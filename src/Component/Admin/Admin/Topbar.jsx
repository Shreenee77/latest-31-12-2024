import React from "react";
import { FaBell, FaEnvelope, FaUserCircle, FaCog, FaQuestionCircle, FaSignOutAlt, FaBars } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar">
      {/* <div className="logo">
        <img src="your-logo-path.png" alt="Logo" />
      </div> */}
      <div className="notifications">
        <FaBell className="icon" />
      </div>
      <div className="messages">
        <FaEnvelope className="icon" />
      </div>
      <div className="profile-dropdown">
        <FaUserCircle className="profile-icon" />
        <span className="admin-name">Admin Name</span>
        <ul className="dropdown-menu">
          <li><a href="/profile"><FaUserCircle /> Profile</a></li>
          <li><a href="/settings"><FaCog /> Settings</a></li>
          <li><a href="/help"><FaQuestionCircle /> Help</a></li>
          <li><a href="/logout"><FaSignOutAlt /> Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
