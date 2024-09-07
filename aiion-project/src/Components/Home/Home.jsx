/* eslint-disable no-unused-vars */
import React from "react";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import Info from "../Info/Info";
import DigitalData from "../DigitalData/DigitalData";

function Home() {
  return (
    <>
      <Header/>
      <Info/>
      <Counter />
      <DigitalData/>
    </>
  );
}

export default Home;
