import React, { useState } from "react";
import GknmLogo from "../../../assets/gknm-logo.png";

// CSS file for styling

const Header = ({ onToggleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onToggleMenu()
  };

  return (
    <header className="dash-header">
      {/* Left section with logo */}
      <div className="header-left">
        <img src={GknmLogo} alt="Appac Media Logo" className="header-logo" />
        <div className="burger-menu" onClick={toggleMenu }>
          <div className={`line ${isMenuOpen ? "line1-open" : "line1"}`}></div>
          <div className={`line ${isMenuOpen ? "line2-open" : "line2"}`}></div>
          <div className={`line ${isMenuOpen ? "line3-open" : "line3"}`}></div>
        </div>
      </div>

      {/* Right section with icons and profile */}
      <div className="header-right">
        <button className="icon-button notification-button">
          <i className="fa fa-bell"></i> {/* Notification icon */}
        </button>
        <button className="icon-button fullscreen-button">
          <i className="fa fa-expand"></i> {/* Fullscreen icon */}
        </button>
        <div className="profile">
          <span className="profile-initial">K</span> {/* Profile Icon */}
        </div>
      </div>
    </header>
  );
};

export default Header;
