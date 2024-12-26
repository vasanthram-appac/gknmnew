import React, { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuName) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    <div className="dash-sidebar">
      <ul className="menu">
        <li className="menu-item">
          <i className="fa fa-dashboard"></i> <Link to="/admin/dashboard" >Dashboard </Link>
        </li>
        <li className="menu-item">
          <i className="fa fa-user"></i>   <Link to="/admin/doctor" >Doctor </Link>
        </li>
        <li className="menu-item" >
          <i className="fa fa-bar-chart"></i><Link to="/admin/specialities" >Specialities </Link>
        </li>
        <li className="menu-item" >
          <i className="fa fa-bar-chart"></i><Link to="/admin/appointment" >Appointment Details</Link>
        </li>
        <li className="menu-item">
          <i className="fa fa-book"></i><Link to="/admin/reports" >Reports</Link>
        </li>
        <li className="menu-item">
          <i className="fa fa-book"></i><Link to="/admin/bio-waste" >Bio Waste Management</Link>
        </li>
        <li className="menu-item">
          <i className="fa fa-cogs"></i><Link to="/admin/annual-report">Annual Report</Link> 
        </li>
          <li className="menu-item">
          <i className="fa fa-cogs"></i><Link to="/admin/aseo">SEO</Link> 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
