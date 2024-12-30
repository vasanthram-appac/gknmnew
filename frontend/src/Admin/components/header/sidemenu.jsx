import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="dash-sidebar">
      <ul className="menu">
        <li className="menu-item">
          <i className="fa fa-user icon1"></i>
          <div className="icon2">
            <Link to="/admin/doctor">
              <i className="fa fa-user"></i>
            </Link>
          </div>
          <Link to="/admin/doctor">Doctor</Link>
        </li>
        <li className="menu-item">
          <i className="fa fa-bar-chart icon1"></i>
          <div className="icon2">
            <Link to="/admin/specialities">
              <i className="fa fa-bar-chart"></i>
            </Link>
          </div>
          <Link to="/admin/specialities">Specialities </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
