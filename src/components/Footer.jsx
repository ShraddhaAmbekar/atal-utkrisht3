import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import '../pages/Other.css'

const Footer = () => {
  return (
    <div className='page-size '>
      <div className="contact-footer">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6 left-section">
              <div className="footer-title">Atal Utkrisht</div>
              <p className="mt-3 text-white">Art Center</p>
              <p className='text-white'>
                500 Terry Francine Street,<br />San Francisco, CA 94158
              </p>
              <p className='text-white'>123-456-7890 | info@mysite.com</p>
              <div className="d-flex footer-icons mt-3 text-white">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-pinterest"></i>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <h4 className="text-white">Contact Us</h4>
              <form className="footer-form">
                <div className="row mb-4">
                  <div className="col">
                    <label className="form-label">First Name *</label>
                    <input type="text" className="form-control" placeholder="First Name" required />
                  </div>
                  <div className="col">
                    <label className="form-label">Last Name *</label>
                    <input type="text" className="form-control" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="row">


                  <div className="col">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="col">
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-control" placeholder="Phone" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Leave us a message...</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>

                <button type="submit" className="btn footer-submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        © 2025 Atal Utkrist Government Inter College Genwla
      </p>
    </div>
  );
};

export default Footer;
