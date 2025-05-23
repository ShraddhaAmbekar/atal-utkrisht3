import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom'; // ✅ updated
import './../App.css';

const Navbar = () => {
  return (
    <>
      {/* Top announcement strip */}
      <div className="text-center py-2 small top">
        {/* You can add an announcement or contact info here */}
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white py-3 border-bottom">
        <div className="container">

          {/* Logo and subtitle */}
          <NavLink className="navbar-brand d-flex flex-column align-items-start" to="/">
            <span className="fw-bold fs-4" style={{ color: '#09246c' }}>Atal Utkrisht</span>
            <small className="text-muted">Art Center</small>
          </NavLink>

          {/* Toggle Button for Mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Items */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/facilities" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Facilities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/documents" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Affiliations and Credentials
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
