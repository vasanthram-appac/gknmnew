import React, { useState } from "react";


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuName) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          <i className="fa fa-dashboard"></i> Dashboard
        </li>
        <li className="menu-item" onClick={() => toggleMenu("userModule")}>
          <i className="fa fa-user"></i> User Module
          {openMenus["userModule"] }
        </li>
        {openMenus["userModule"] && (
          <ul className="submenu">
            <li>Submenu 1</li>
            <li>Submenu 2</li>
          </ul>
        )}
        <li className="menu-item" onClick={() => toggleMenu("reports")}>
          <i className="fa fa-bar-chart"></i> Reports
          {openMenus["reports"] }
        </li>
        {openMenus["reports"] && (
          <ul className="submenu">
            <li>Work Report</li>
            <li>Employee Report</li>
            <li>Monthly Report</li>
          </ul>
        )}
        <li className="menu-item">
          <i className="fa fa-book"></i> Documents
        </li>
        <li className="menu-item">
          <i className="fa fa-cogs"></i> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
