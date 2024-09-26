import React, { useEffect, useState } from "react";
import videoSrc from "../../assets/videos/Aiion-video.mp4";
import { Link } from "react-router-dom";

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
      <div className="header-section bg-body-tertiary py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 text-section d-flex flex-column justify-content-center text-md-start">
              <h1 className="mb-3 animate-title">
                Experience the Future
              </h1>
              <p className="fs-5 mb-3">{paragraphs[0]}</p>

              <Link
                to="/learnmore"
                className="btn btn-gradient btn-lg text-uppercase fs-6 fw-bold"
              >
                Learn More
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="col-md-6 col-12 video-container mt-4 mt-md-0 text-center">
              <div className="video-wrapper">
                <video width="100%" controls className="video-element">
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
