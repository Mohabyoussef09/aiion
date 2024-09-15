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
      <div className="header">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-6 d-flex flex-column justify-content-center text-section">
              <p className="fs-5">{paragraphs[0]}</p>

              <Link
                to="/learnmore"
                className="text-uppercase fs-6 fw-bold mt-2"
              >
                Learn More
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
            <div className="video-container col-md-6">
              <video width="100%" controls>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Header;
