/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";

import SideBar from "./../SideBar/SideBar";

function Layout() {
  return (
    <>
      <div className="parent">
        <Navbar />
        <SideBar />

        <Outlet />

        <Footer />
      </div>
    </>
  );
}

export default Layout;
