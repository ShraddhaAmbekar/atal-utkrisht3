import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';
import './../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setMenuOpen(false); // close the menu when a nav item is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // toggle open/close
  };

  return (
    <>
      <div className="text-center py-2 small top"></div>

      <nav className="navbar navbar-expand-lg bg-white py-3 border-bottom">
        <div className="container">

          <NavLink className="navbar-brand d-flex flex-column align-items-start" to="/">
            <span className="fw-bold fs-4" style={{ color: '#09246c' }}>Atal Utkrisht</span>
            <small className="text-muted">Art Center</small>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-center ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <NavLink to="/" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/facilities" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Facilities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/documents" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Affiliations and Credentials</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
