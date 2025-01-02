import React, { useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaUserCircle,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaSearch,
  FaTimes
} from "react-icons/fa";

const Topbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch); // Toggle search input visibility
  };

  return (
    <div className="topbar">
      {/* Left side: Search Icon */}
      <div className="search">
        <div className={`search-container ${showSearch ? "active" : ""}`}>
          <FaSearch className="search-icon" onClick={toggleSearch} />
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          )}
          {showSearch && (
            <FaTimes className="close-icon" onClick={toggleSearch} />
          )}
        </div>
      </div>

      {/* Right side: Icons */}
      <div className="right-section">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
        <div className="profile-dropdown">
          <FaUserCircle className="profile-icon" />
          <span className="admin-name">Admin Name</span>
          <ul className="dropdown-menu">
            <li>
              <a href="/profile">
                <FaUserCircle /> Profile
              </a>
            </li>
            <li>
              <a href="/settings">
                <FaCog /> Settings
              </a>
            </li>
            <li>
              <a href="/help">
                <FaQuestionCircle /> Help
              </a>
            </li>
            <li>
              <a href="/logout">
                <FaSignOutAlt /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
