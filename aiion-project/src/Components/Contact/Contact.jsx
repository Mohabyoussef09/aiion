import React from "react";

function Contact() {
  return (
    <div className="contact-section bg-body-tertiary d-flex justify-content-center align-items-center py-5">
      <div className="container text-center">
        <div className="contact-content p-5">
          <h1 className="contact-title mb-4">Contact Us</h1>
          <p className="contact-text mb-4 lead">
            <strong>AiION</strong> was developed during the Ph.D. of Mahmoud M.
            AlGaiar.
          </p>
          <p className="contact-text mb-4">
            If you use this project's script for your academic work, we
            encourage you to cite:
            <br />
            <em>
              AlGaiar et al., 2024: AI-Powered Geothermometry: Revolutionising
              Deep Geothermal Exploration for a Sustainable Future.
              Sustainability and Artificial Intelligence: Reshaping Tomorrow
              (SpringerNature).
            </em>
          </p>
          <p className="contact-text mb-4">
            Please feel free to contact us for any questions. We will be happy
            to help.
          </p>

          <a
            className="contact-btn btn btn-lg px-4 py-2"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=m.algaiar@rgu.ac.uk&su=Hello%20Ali&body=I%20would%20like%20to%20connect%20with%20you."
            target="_blank"
          >
            <i className="fa-solid fa-envelope"></i> Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
