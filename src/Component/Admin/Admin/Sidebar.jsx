import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../Assets/img/logo_new.jpg";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ menuItems = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const activeIndex = menuItems.findIndex((item) =>
      item.submenu
        ? item.submenu.some((subItem) =>
            location.pathname.includes(`/admin/${subItem.path}`)
          )
        : location.pathname.includes(`/admin/${item.path}`)
    );
    setOpenIndex(activeIndex);
  }, [location.pathname, menuItems]);

  const handleMenuClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div
      className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}
      style={{
        width: isSidebarCollapsed ? "60px" : "250px",
      }}
    >
      {/* Toggle icon and logo positioned on the same line */}
      <div
        className="toggle-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: "1px solid #ccc",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <span
          className="toggle-icon"
          onClick={handleSidebarToggle}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            paddingRight:"13px"
          }}
        >
          <FaBars />
        </span>
        {!isSidebarCollapsed && (
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
            style={{ width: "120px", height: "auto" }}
          />
        )}
      </div>

      <ul style={{ listStyleType: "none", padding: "10px 0" }}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${openIndex === index ? "open" : ""}`}
            style={{
              textAlign: "center",
              padding: "10px 0",
              borderBottom: "1px solid #ccc",
            }}
          >
            {item.submenu ? (
              <>
                <span
                  onClick={() => handleMenuClick(index)}
                  className="menu-title"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <span style={{ marginRight: "10px" , fontSize:"20px" }}>{item.icon}</span>
                  {!isSidebarCollapsed && <span>{item.title}</span>}
                </span>
                {openIndex === index && (
                  <ul className="dropdown" style={{ paddingLeft: "20px" }}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`submenu-item ${
                          location.pathname === `/admin/${subItem.path}`
                            ? "active"
                            : ""
                        }`}
                        style={{
                          textAlign: "center",
                          padding: "5px 0",
                        }}
                      >
                        <Link to={`/admin/${subItem.path}`}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={`/admin/${item.path}`}
                className={`menu-title ${
                  location.pathname === `/admin/${item.path}` ? "active" : ""
                }`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <span style={{ marginRight: "10px" , fontSize:"20px" }}>{item.icon}</span>
                {!isSidebarCollapsed && <span>{item.title}</span>}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
