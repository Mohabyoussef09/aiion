import React from "react";

import footerImg from "../../assets/images/logo.jpg";

function Footer() {
  return (
    <>
      <footer className="footer py-5 fs-5">
        <div className="container footer-content d-flex flex-column flex-md-row justify-content-between align-items-center mx-auto">
          <div className="footer-logo mb-3 mb-md-0">
            <img
              src={footerImg}
              alt="AiION Logo"
              className="logo img-fluid"
            />
          </div>
          <div className="footer-text text-center text-md-start">
            <p>&copy; 2024 <span className="fw-bolder">AiION</span>. All rights reserved.</p>
            <p>
              <a href="#">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#">
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
