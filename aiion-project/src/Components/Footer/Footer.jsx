/* eslint-disable no-unused-vars */
import React from "react";

import footerImg from "../../assets/images/logo.jpg";

function Footer() {
  return (
    <>
      <footer className="footer-container py-4">
        <div className="container footer-content d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="footer-logo mb-3 mb-md-0">
            <img
              src={footerImg}
              alt="Company Logo"
              className="logo img-fluid"
            />
          </div>
          <div className="footer-text text-center text-md-start">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
            <p>
              <a className="text-decoration-none" href="#">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a className="text-decoration-none" href="#">
                Terms of Service
              </a>
            </p>
            <p>Follow us on social media for updates.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
