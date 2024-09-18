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
          <div className="origin bg-body-tertiary">
      <div className="text-container">
        <h1 className="title text-uppercase">the origin</h1>
        <p className="paragraph">
          {text}
        </p>
      </div>
      <div className="background-image"></div>
    </div>

    </>
  );
}

export default Origin;
