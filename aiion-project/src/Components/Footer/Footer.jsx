/* eslint-disable no-unused-vars */
import React from 'react';

import footerImg from '../../assets/images/logo.jpg'

function Footer() {
    return (
        <>
        {/* <div className='footer bg-dark py-5 text-white'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5 text-center mb-3">
                        <img src={footerImg} alt="" />
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-center py-3">
                        <a href="">Resources</a>
                        <a href="">Governing Board</a>
                        <a href="">Status Page</a>
                        <a href="">Email Us</a>
                    </div>

                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <a href="">The Doi Handbook</a>
                        <a href="">Iso 26324</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Trademarks (PDF)</a>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-10 d-flex flex-column align-items-center">
                        <p>Copyright © 2022 DOI Foundation.  The content of this site is licensed under a Creative Commons Attribution 4.0 International License.</p>
                        <p>DOI®, DOI.ORG®, and shortDOI® are trademarks of the DOI Foundation.</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-evenly fs-3">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-solid fa-envelope"></i>
                    </div>
                </div>
            </div>
        </div> */}





  <footer className="text-center text-lg-start text-white" style={{backgroundColor: 'black'}}>
    <div className="container p-4 pb-0">
      <section className>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <img width={70} className='rounded-5 mb-1' src={footerImg} alt="" />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a className="text-white">MDBootstrap</a>
            </p>
            <p>
              <a className="text-white">MDWordPress</a>
            </p>
            <p>
              <a className="text-white">BrandFlow</a>
            </p>
            <p>
              <a className="text-white">Bootstrap Angular</a>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a className="text-white">Your Account</a>
            </p>
            <p>
              <a className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a className="text-white">Help</a>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
          </div>
        </div>
      </section>
      <hr className="my-3" />
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
            <p>Copyright © 2022 DOI Foundation.</p>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a className="text-white btn m-1" role="button"><i className="fab fa-facebook-f" /></a>
            <a className="text-white btn m-1" role="button"><i className="fab fa-twitter" /></a>
            <a className="text-white btn m-1" role="button"><i className="fab fa-google" /></a>
            <a className="text-white btn m-1" role="button"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </section>
    </div>
  </footer>

        </>
    );
}

export default Footer;