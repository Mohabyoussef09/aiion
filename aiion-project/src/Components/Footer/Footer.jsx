/* eslint-disable no-unused-vars */
import React from "react";

import footerImg from "../../assets/images/logo.jpg";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={footerImg} alt="Company Logo" className="logo" />
          </div>
          <div className="footer-text">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
            <p>Follow us on social media for updates.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
