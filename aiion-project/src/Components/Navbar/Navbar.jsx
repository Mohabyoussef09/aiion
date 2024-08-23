/* eslint-disable no-unused-vars */

import { React } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.jpg";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img width={100} src={logo} alt="Aiion Page Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle text-uppercase"
                  href="#"
                  role="button"
                >
                  the foundation
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/about"} className="dropdown-item">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={"/history"} className="dropdown-item">
                      History
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle text-uppercase"
                  href="#"
                  role="button"
                >
                  model
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/single"} className="dropdown-item">
                      Single Input
                    </Link>
                  </li>
                  <li>
                    <Link to={"/multi"} className="dropdown-item">
                      Multi Inputs
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle text-uppercase"
                  href="#"
                  role="button"
                >
                  contact us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/about"} className="dropdown-item">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
