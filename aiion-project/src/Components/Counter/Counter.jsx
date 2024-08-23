import React, { useEffect, useState } from "react";


function Counter() {

    const [fileContent, setFileContent] = useState('');


    useEffect(() => {
        // Define a function to fetch the file data
        const fetchFileData = () => {
          fetch("./file.txt")
            .then((response) => response.text())
            .then((text) => {
              setFileContent(text);
            })
            .catch((error) => {
              console.error("Error fetching the text file:", error);
            });
        };
    
        // Fetch the data initially
        fetchFileData();
    
        // Set up the interval to fetch the data every 5 seconds (or any interval you choose)
        const intervalId = setInterval(fetchFileData, 2000);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);
    
  return (
    <>
      {/* <div className="counter text-center py-5">
        <div className="container py-5">
          <div className="col-md-12 py-5">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <span className="fa-3x">{fileContent}</span>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              fugit?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              doloremque beatae necessitatibus laborum, non ratione pariatur
              placeat ea ab culpa?
            </p>
            <span className="fa-3x">95%</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              voluptas!
            </p>
          </div>
        </div>
      </div> */}



<div className="counter-section text-center py-5">
      <div className="container py-5">
        <div className="col-md-12 py-5">
          <h2 className="text-white animate__animated animate__fadeInDown">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <span className="fa-3x text-white counter animate__animated animate__fadeInUp">{fileContent}</span>
          <p className="fs-5 text-white mt-3 animate__animated animate__fadeInLeft">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit?
          </p>
          <p className="text-white animate__animated animate__fadeInRight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloremque beatae necessitatibus laborum, non ratione pariatur placeat ea ab culpa?
          </p>
          <span className="fa-3x text-white animate__animated animate__fadeInUp">95%</span>
          <p className="text-white animate__animated animate__fadeInDown">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas!
          </p>
        </div>
      </div>
    </div>

    </>
  );
}

export default Counter;
