import React, { useEffect, useState } from "react";

function Counter() {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    const fetchFileData = () => {
      fetch("./counter.txt")
        .then((response) => response.text())
        .then((text) => {
          setFileContent(text);
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
      <div className="counter-section text-center py-5">
        <div className="container py-5">
          <div className="col-md-12">
            <h2 className="mb-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <span className="text-white counter">{fileContent}</span>
            <p className="fs-5 text-white mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              fugit?
            </p>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              doloremque beatae necessitatibus laborum, non ratione pariatur
              placeat ea ab culpa?
            </p>
            <span className="fa-3x text-white">95%</span>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              voluptas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
