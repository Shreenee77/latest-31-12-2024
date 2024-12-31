import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/img/logo_new.jpg";

const Sidebar = ({ menuItems = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Find the index of the submenu containing the active route
    const activeIndex = menuItems.findIndex((item) =>
      item.submenu
        ? item.submenu.some((subItem) =>
            location.pathname.includes(`/admin/${subItem.path}`)
          )
        : location.pathname.includes(`/admin/${item.path}`)
    );
    setOpenIndex(activeIndex); // Keep the dropdown open if it's active
  }, [location.pathname, menuItems]);

  const handleMenuClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle submenu visibility
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${openIndex === index ? "open" : ""}`}
          >
            {item.submenu ? (
              <>
                <span
                  onClick={() => handleMenuClick(index)}
                  className="menu-title"
                >
                  {item.icon}
                  <span>{item.title}</span>
                  {item.icon2}
                </span>
                {openIndex === index && (
                  <ul className="dropdown">
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`submenu-item ${
                          location.pathname === `/admin/${subItem.path}`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link to={`/admin/${subItem.path}`}>
                          {subItem.icon && <span>{subItem.icon}</span>}
                          {subItem.title}
                          {subItem.icon2 && <span>{subItem.icon2}</span>}
                        </Link>
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
              >
                {item.icon}
                <span>{item.title}</span>
                {item.icon2}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
