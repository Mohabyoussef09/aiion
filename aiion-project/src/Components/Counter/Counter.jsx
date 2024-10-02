import React, { useEffect, useState } from "react";

function Counter() {
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    const fetchFileData = () => {
      fetch("./counter.txt")
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
      <div
        style={{ backgroundColor: "#487A45" }}
        className="counter-section text-center py-md-5 py-3"
      >
        <div className="container py-md-5 py-3">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <h3 className="mb-4 text-white fs-md-3 fs-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <span className="fa-4x text-white fw-bold">{paragraph}</span>
              <p className="fs-md-5 fs-4 text-white mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, fugit?
              </p>
              <p className="text-white fs-md-5 fs-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt doloremque beatae necessitatibus laborum, non ratione
                pariatur placeat ea ab culpa?
              </p>
              <span className="fa-4x text-white fw-bold">95%</span>
              <p className="text-white fs-md-5 fs-4 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                voluptas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
