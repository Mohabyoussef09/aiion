import React from "react";

function Contact() {
  return (
    <div className="contact-section bg-body-tertiary">
      <div className="container text-center">
        <div className="contact-content">
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
            href="mailto:m.algaiar@rgu.ac.uk"
            className="contact-btn btn btn-lg px-4 py-2"
          >
            <i className="fa-solid fa-envelope"></i> Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
