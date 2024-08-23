import React from "react";
import img from "../../assets/images/data.webp";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center text-section">
              <p className="fs-4 fw-bold mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad
                deserunt dicta perferendis quasi dignissimos asperiores aliquid
                illo dolore, distinctio sint, ratione explicabo? Assumenda
                eveniet eum repellat perferendis iusto odit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                aliquam fugiat minima voluptatibus, cumque sint.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center circle-image-wrapper">
              <img
                src={img}
                className="circle-image img-fluid animated-image"
                alt="Animated Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
