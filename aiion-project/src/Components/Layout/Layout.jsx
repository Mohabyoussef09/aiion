/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

import SideBar from './../SideBar/SideBar';
import Button from '../Button/Button';



function Layout() {
    return (
        <>
        <Navbar/>

        <SideBar/>
        
        <Outlet/>

        <Footer/>
        </>
    );
}

export default Layout;