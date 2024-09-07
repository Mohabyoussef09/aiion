import React, { useEffect, useState } from "react";
import img from "../../assets/images/circle-bin.avif";

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
      <div className="header py-5">
        <div className="container">
          <div className="row py-5 gx-5">
            <div className="col-md-7 d-flex flex-column justify-content-center text-section">
                <p>{paragraphs[0]}</p>

              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-uppercase text-decoration-none text-dark fs-6 fw-bold"
              >
                Learn More
                <i className="fas fa-arrow-right ms-2 text-success"></i>
              </a>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center circle-image-wrapper">
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
