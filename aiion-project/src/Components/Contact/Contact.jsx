import React from "react";

function Contact() {
  return (
    <div className="contact-section">
            <div className="container text-center">
        <div className="contact-content">
        <h1 className="contact-title mb-4">Contact Us</h1>

          <p className="contact-text mb-4">
            <strong>AIiON</strong> was developed during the Ph.D. of Mahmoud M. AlGaiar.
          </p>
          <p className="contact-text mb-4">
            If you use this project's script for your academic work, we encourage you to cite:
            <em>AlGaiar et al., 2024: AI-Powered Geothermometry: Revolutionising Deep Geothermal Exploration for a Sustainable Future. Sustainability and Artificial Intelligence: Reshaping Tomorrow (SpringerNature).</em>
          </p>
          <p className="contact-text mb-4">
            Please feel free to contact us for any questions. We will be happy to help.
          </p>
          <p className="contact-text">
            Email: <a className="contact-email" href="mailto:m.algaiar@rgu.ac.uk">m.algaiar@rgu.ac.uk</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
