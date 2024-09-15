import React from "react";
import { useEffect, useState } from "react";

function Origin() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/origin.txt")
      .then((response) => response.text())
      .then((data) => {
        setText(data); // Update the state with the fetched text
      })
      .catch((error) => {
        console.error("Error fetching the text file:", error);
      });
  }, []);
  return (
    <>
      <section className="bg-section d-flex align-items-center justify-content-center">
        <div className="content-wrapper">
          <h1 className="title animate__animated animate__fadeInDown">
            {" "}
            the origin
          </h1>
          <p className="paragraph animate__animated animate__fadeInUp">
            {text}
          </p>
        </div>
      </section>
    </>
  );
}

export default Origin;
