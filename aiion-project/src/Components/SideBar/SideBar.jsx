import React from "react";

function SideBar() {
  return (
    <>
      <div className="sideBar d-flex flex-column text-center justify-content-center">
        <a
          href="https://www.linkedin.com/in/mahmoud-m-algaiar-95501032b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=m.algaiar@rgu.ac.uk&su=Hello%20Ali&body=I%20would%20like%20to%20connect%20with%20you."
          target="_blank"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </>
  );
}

export default SideBar;
