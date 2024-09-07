import React, { useEffect, useState } from "react";

function Info() {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch("./paragraphs.txt");
        const text = await response.text();
        const parsedParagraphs = JSON.parse(text); // Make sure paragraphs.txt is a valid JSON array
        setParagraphs(parsedParagraphs);
      } catch (error) {
        console.error("Error fetching the text file:", error);
      }
    };

    fetchFileData();
  }, []);
  return (
    <>
      <div className="py-5">
        <div className="container mt-4py-5">
          <div className="row gx-5 py-5">
            <div className="col-md-6">
              <div className="info-card">
                <div className="card-body ">
                  <i className="fa-solid fa-globe info-icon mb-2"></i>
                  {/* Display only the specific paragraph based on the index */}
                    <p>{paragraphs[1]}</p>
              
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste commodi laborum error aliquam modi cum nostrum iusto
                    blanditiis.
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni accusamus
                  </p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-uppercase text-decoration-none text-dark fs-6 fw-bold"
                  >
                    learn more
                    <i className="fas fa-arrow-right ms-2 text-success"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card">
                <div className="card-body">
                  <i className="fa-solid fa-bullseye info-icon mb-2"></i>
                    <p>{paragraphs[2]}</p>
            
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste commodi laborum error aliquam modi cum nostrum iusto
                    blanditiis.
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni accusamus
                  </p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-uppercase text-decoration-none text-dark fs-6 fw-bold"
                  >
                    learn more
                    <i className="fas fa-arrow-right ms-2 text-success"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
