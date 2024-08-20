/* eslint-disable no-unused-vars */

import { React } from "react";
import { NavLink } from "react-router-dom";

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
                    <NavLink to={"/about"} className="dropdown-item">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/history"} className="dropdown-item">
                      History
                    </NavLink>
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
                    <NavLink to={"/about"} className="dropdown-item">
                      Single Input
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/hisotry"} className="dropdown-item">
                      Multi Inputs
                    </NavLink>
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
                    <NavLink to={"/about"} className="dropdown-item">
                      FAQs
                    </NavLink>
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
