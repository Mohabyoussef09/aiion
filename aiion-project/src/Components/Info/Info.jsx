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
                <div className="card-body">
                  <i className="fa-solid fa-globe info-icon mb-2"></i>
                  <h4>{paragraphs[1]}</h4>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-uppercase fs-6 fw-bold"
                  >
                    learn more
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card">
                <div className="card-body">
                  <i className="fa-solid fa-bullseye info-icon mb-2"></i>
                  <h4>{paragraphs[2]}</h4>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-uppercase fs-6 fw-bold"
                  >
                    learn more
                    <i className="fas fa-arrow-right ms-2"></i>
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
