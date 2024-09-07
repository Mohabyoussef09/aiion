import React from "react";

import aust from "../../assets/images/cdn_image.gif";
import china from "../../assets/images/china-map.gif";
import indo from "../../assets/images/indonesia-map.gif";
import italy from "../../assets/images/italy-map.gif";
import japan from "../../assets/images/japan-map.gif";
import russia from "../../assets/images/russia-map.svg";

function DigitalData() {
  return (
    <>
<div className="container mt-5 py-5">
  <div className="text-center">
    <h1 className="fa-3x">Digital Data By Country</h1>
    <p>Get country specific about audiences around the world</p>
  </div>
  <div className="row py-5 gx-4">
    <div className="col-md-2">
      <a
        target="_blank"
        href="https://www.google.com/"
        className="text-decoration-none text-dark"
      >
        <div className="country-card w-100 py-4">
          <img
            src={aust}
            className="w-100"
          />
          <h6 className="text-center mt-3">Australia</h6>
        </div>
      </a>
    </div>
    <div className="col-md-2">
      <a
        target="_blank"
        href="https://www.google.com/"
        className="text-decoration-none text-dark"
      >
        <div className="country-card w-100 py-4">
          <img
            src={china}
            className="w-100"
          />
          <h6 className="text-center mt-3">China</h6>
        </div>
      </a>
    </div>
    <div className="col-md-2">
      <a
        target="_blank"
        href="https://www.google.com/"
        className="text-decoration-none text-dark"
      >
        <div className="country-card w-100 py-4">
          <img
            src={indo}
            className="w-100"
          />
          <h6 className="text-center mt-3">Indonesia</h6>
        </div>
      </a>
    </div>
    <div className="col-md-2">
      <a
        target="_blank"
        href="https://www.google.com/"
        className="text-decoration-none text-dark"
      >
        <div className="country-card w-100 py-4">
          <img
            src={italy}
            className="w-100"
          />
          <h6 className="text-center mt-3">Italy</h6>
        </div>
      </a>
    </div>
    <div className="col-md-2">
      <a
        target="_blank"
        href="https://www.google.com/"
        className="text-decoration-none text-dark"
      >
        <div className="country-card w-100 py-4">
          <img
            src={japan}
            className="w-100"

          />
          <h6 className="text-center mt-3">Japan</h6>
        </div>
      </a>
    </div>
    <div className="col-md-2">
      <a
        target="_blank"
        href="https://www.google.com/"
        className="text-decoration-none text-dark"
      >
        <div className="country-card w-100 py-4">
          <img
            src={russia}
            className="w-100"
          />
          <h6 className="text-center mt-3">Russia</h6>
        </div>
      </a>
    </div>
  </div>
</div>

    </>
  );
}

export default DigitalData;
