
import { React } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.jpg";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container">
        <a className="navbar-brand" href="/">
            <img width={130} src={logo} alt="AiION Logo" />
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
                <Link
                  className="nav-link dropdown-toggle text-uppercase fw-bolder"
                  to={'/origin'}
                  role="button"
                >
                  the origin
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/about"} className="dropdown-item text-uppercase fw-bold">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={"/history"} className="dropdown-item text-uppercase fw-bold">
                      History
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle text-uppercase fw-bolder"
                  href="#"
                  role="button"
                >
                  the model
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/single"} className="dropdown-item text-uppercase fw-bold">
                      Single Input
                    </Link>
                  </li>
                  <li>
                    <Link to={"/multi"} className="dropdown-item text-uppercase fw-bold">
                      Multi Inputs
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown mx-2">
                <Link
                to={'/contact'}
                  className="nav-link dropdown-toggle text-uppercase fw-bolder"
                  href="#"
                  role="button"
                >
                  contact us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"FAQs"} className="dropdown-item fw-bold">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to={"developerbio"} className="dropdown-item text-uppercase fw-bold">
                      Developer Bio
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
