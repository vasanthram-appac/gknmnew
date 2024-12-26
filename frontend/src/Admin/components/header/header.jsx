import React from "react";
// CSS file for styling

const Header = () => {
  return (
    <header className="header">
      {/* Left section with logo */}
      <div className="header-left">
        <img
          src="logo_url_here"
          alt="Appac Media Logo"
          className="header-logo"
        />
        <span className="header-subtitle">enabling solutions</span>
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
