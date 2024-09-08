import React, { useEffect, useState } from "react";
import img from "../../assets/images/data.webp";

function Header() {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch("./paragraphs.txt");
        const text = await response.text();
        const parsedParagraphs = JSON.parse(text);
        setParagraphs(parsedParagraphs);
      } catch (error) {
        console.error("Error fetching the text file:", error);
      }
    };

    fetchFileData();
  }, []);

  return (
    <>
      <div className="header">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-6 d-flex flex-column justify-content-center text-section">
                <h4>{paragraphs[0]}</h4>

              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-uppercase fs-6 fw-bold"
              >
                Learn More
                <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
            <div className="col-md-6 circle-image-wrapper d-flex justify-content-center">
              <img
                src={img}
                className="circle-image img-fluid animated-image"
                alt="Animated Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
