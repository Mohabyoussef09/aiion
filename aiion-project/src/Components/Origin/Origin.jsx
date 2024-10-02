import React from "react";
import { useEffect, useState } from "react";

function Origin() {
  const [originParagraphs, setOriginParagraphs] = useState([]);

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch("./origin.txt");
        const text = await response.text();
        const parsedParagraphs = JSON.parse(text);
        setOriginParagraphs(parsedParagraphs);
      } catch (error) {
        console.error("Error fetching the text file:", error);
      }
    };

    fetchFileData();

    const interValid = setInterval(fetchFileData, 1000);

    return () => clearInterval(interValid);
  }, []);
  return (
    <>
      <div className="origin bg-body-tertiary p-3">
        <h2 className="title">THE ORIGIN</h2>
        <p className="paragraph">{originParagraphs[0]}</p>
        <p className="paragraph">{originParagraphs[1]}</p>
        <p className="paragraph">{originParagraphs[2]}</p>
        <p className="paragraph">{originParagraphs[3]}</p>
        <p className="paragraph">{originParagraphs[4]}</p>  
      </div>
    </>
  );
}

export default Origin;
