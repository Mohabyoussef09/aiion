import React, { useEffect, useState } from "react";

function FAQs() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/FAQs.txt")
      .then((response) => response.text())
      .then((text) => {
        const parsedData = JSON.parse(text);
        setFaqs(parsedData);
        console.log("Number of FAQ objects:", parsedData.length);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="container my-5">
        <h2 className="accordion-title text-center mb-4">
          Frequently Asked Questions
        </h2>
        <div className="accordion" id="faqsAccordion">
          {faqs.length > 0 &&
            faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`faq${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`faq${index}`}
                  data-bs-parent="#faqsAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default FAQs;
