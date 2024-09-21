// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// function FAQs() {
//   const [faqs, setFaqs] = useState([]);

//   useEffect(() => {
//     fetch("/FAQs.txt")
//       .then((response) => response.text())
//       .then((text) => {
//         const parsedData = JSON.parse(text);
//         setFaqs(parsedData);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   return (
//     <>
//       <div className="container my-5">
//         <h2 className="accordion-title text-center mb-4">Frequently Asked Questions</h2>
//         <div className="accordion" id="faqsAccordion">
//           {faqs.length > 0 && (
//             <>
//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="faq0">
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse0"
//                     aria-expanded="false"
//                     aria-controls="collapse0"
//                   >
//                     {faqs[0].question}
//                   </button>
//                 </h2>
//                 <div
//                   id="collapse0"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="faq0"
//                   data-bs-parent="#faqsAccordion"
//                 >
//                   <div className="accordion-body">{faqs[0].answer}</div>
//                 </div>
//               </div>

//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="faq1">
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse1"
//                     aria-expanded="false"
//                     aria-controls="collapse1"
//                   >
//                     {faqs[1].question}
//                   </button>
//                 </h2>
//                 <div
//                   id="collapse1"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="faq1"
//                   data-bs-parent="#faqsAccordion"
//                 >
//                   <div className="accordion-body">{faqs[1].answer}</div>
//                 </div>
//               </div>

//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="faq2">
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse2"
//                     aria-expanded="false"
//                     aria-controls="collapse2"
//                   >
//                     {faqs[2].question}
//                   </button>
//                 </h2>
//                 <div
//                   id="collapse2"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="faq2"
//                   data-bs-parent="#faqsAccordion"
//                 >
//                   <div className="accordion-body">{faqs[2].answer}</div>
//                 </div>
//               </div>

//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="faq3">
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse3"
//                     aria-expanded="false"
//                     aria-controls="collapse3"
//                   >
//                     {faqs[3].question}
//                   </button>
//                 </h2>
//                 <div
//                   id="collapse3"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="faq3"
//                   data-bs-parent="#faqsAccordion"
//                 >
//                   <div className="accordion-body">{faqs[3].answer}</div>
//                 </div>
//               </div>

//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="faq4">
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse4"
//                     aria-expanded="false"
//                     aria-controls="collapse4"
//                   >
//                     {faqs[4].question}
//                   </button>
//                 </h2>
//                 <div
//                   id="collapse4"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="faq4"
//                   data-bs-parent="#faqsAccordion"
//                 >
//                   <div className="accordion-body">{faqs[4].answer}</div>
//                 </div>
//               </div>

//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="faq5">
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse5"
//                     aria-expanded="false"
//                     aria-controls="collapse5"
//                   >
//                     {faqs[5].question}
//                   </button>
//                 </h2>
//                 <div
//                   id="collapse5"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="faq5"
//                   data-bs-parent="#faqsAccordion"
//                 >
//                   <div className="accordion-body">{faqs[5].answer}</div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default FAQs;


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
        <h2 className="accordion-title text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqsAccordion">
          {faqs.length > 0 && (
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
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default FAQs;
