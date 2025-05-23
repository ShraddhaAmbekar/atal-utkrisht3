import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="row">

          {/* Column 1: School Info + About Links */}
          <div className="col-md-3 mb-4 px-3 text-white">
            <h3>Atal Utkrist </h3>          
          </div>

          {/* Column 2: Facilities */}
          <div className="col-md-3 mb-4 ">
            <h4>Other Navigation</h4>
           <div className=''>
             <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
               <li><Link to="/documents">Affliation and Credentials</Link></li>
            </ul>
           </div>
          
          </div>

          <div className="col-md-3 mb-4 ">
            <h4>Stay Connected</h4>
           <div className=''>
             <ul>
              <li><Link to="https://www.facebook.com">Facebook</Link></li>
              <li><Link to="https://x.com">Twitter</Link></li>
              <li><Link to="https://www.instagram.com">Instagram</Link></li>
               <li><Link to="https://www.youtube.com">Youtube</Link></li>
            </ul>
           </div>
          
          </div>

    
      

          {/* Column 4: Contact Details */}
          <div className="col-md-3 mb-4">
            <h4>Contact Us</h4>
            <p>Atal Utkrishti</p>
            <p>Pin code - </p>
            <p>Email:</p>
            <p>Phone: </p>
         
          </div>

        </div>

        <div className="footer-bottom-text">
          <p className="text-center">
            &copy; 2025 Atal Utkrist  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
