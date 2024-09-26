import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({children}){
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch("./learnmore.txt");
        const text = await response.text();
        const parsedParagraphs = JSON.parse(text);
        setParagraphs(parsedParagraphs);
      } catch (error) {
        console.error("Error fetching the text file:", error);
      }
    };

    fetchFileData();

    const interValid = setInterval(fetchFileData, 1000);

    return () => clearInterval(interValid);
  }, []);

  return (
    <GlobalContext.Provider value={{paragraphs: paragraphs}}>
      {children}
    </GlobalContext.Provider>
  );
};
