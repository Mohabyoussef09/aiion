import React, { useEffect, useState } from "react";
import videoSrc from "../../assets/videos/Aiion-video.mp4";
import { Link } from "react-router-dom";

function Header() {
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    const fetchFileData = () => {
      fetch("./headerParagraph.txt")
        .then((response) => response.text())
        .then((text) => {
          setParagraph(text);
        })
        .catch((error) => {
          console.error("Error fetching the text file:", error);
        });
    };

    fetchFileData();

    const interValid = setInterval(fetchFileData, 1000);

    return () => clearInterval(interValid);
  }, []);

  return (
    <>
      <div className="header-section bg-body-tertiary py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="text-section col-md-6 col-12 d-flex flex-column justify-content-center text-md-start">
              <h1 className="mb-3 animate-title">
                Embrace the Future
              </h1>
              <p className="fs-5 mb-3">{paragraph}</p>

              <Link
                to="/learnmore"
                className="btn btn-gradient text-uppercase"
              >
                Learn More
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="col-md-6 col-12 video-container mt-4 mt-md-0 text-center">
              <div className="video-wrapper">
                <video width="100%" controls className="video-element rounded-4">
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
