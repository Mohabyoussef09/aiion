/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import img from "../../assets/images/data.webp";


function Home() {


    let [fileContent, setFileContent] = useState('');
  
    useEffect(() => {
      fetch('./file.txt')
        .then((response) => response.text())
        .then((text) => {
          setFileContent(text);
        })
        .catch((error) => {
          console.error('Error fetching the text file:', error);
        });
    }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="fs-4 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad
              deserunt dicta perferendis quasi dignissimos asperiores aliquid
              illo dolore, distinctio sint, ratione explicabo? Assumenda eveniet
              eum repellat perferendis iusto odit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              aliquam fugiat minima voluptatibus, cumque sint.
            </p>

            <a href="#link" className="btn btn-success w-20">
              <i className="fas fa-arrow-right me-2"/>
              Click here
            </a>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center circle-image-wrapper">
            <img src={img} className="circle-image" />
          </div>
        </div>
      </div>

      <div className="info bg-body-tertiary p-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 py-5 text-center">
              <i className="fa-solid fa-globe mx-auto ic"></i>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                magnam?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                commodi laborum error aliquam modi cum nostrum iusto blanditiis.
                Quo ad maxime atque officia maiores excepturi error repellat
                sunt ratione omnis, quia voluptatibus libero, dignissimos
                mollitia. Sequi, nihil quis. Dicta architecto eveniet odit quo
                itaque dignissimos voluptas alias laborum facilis nemo?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                accusamus, natus tenetur neque non libero eaque atque nemo
                nostrum! Omnis!
              </p>
              <a href="#link" className="btn btn-success">
                <i className="fas fa-arrow-right me-2" />
                Click here
              </a>

            </div>
            <div className="col-md-6 py-5 text-center">
              <i className="fa-solid fa-bullseye mx-auto ic"></i>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                magnam?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                commodi laborum error aliquam modi cum nostrum iusto blanditiis.
                Quo ad maxime atque officia maiores excepturi error repellat
                sunt ratione omnis, quia voluptatibus libero, dignissimos
                mollitia. Sequi, nihil quis. Dicta architecto eveniet odit quo
                itaque dignissimos voluptas alias laborum facilis nemo?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                accusamus, natus tenetur neque non libero eaque atque nemo
                nostrum! Omnis!
              </p>
              <a href="#link" className="btn btn-success">
                <i className="fas fa-arrow-right me-2" />
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div classname="info bg-body-tertiary">
  <div classname="container">
    <div classname="row">
      <div classname="col-md-6 py-5 text-center">
        <i classname="fa-solid fa-globe mx-auto" />
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi
          laborum error aliquam modi cum nostrum iusto blanditiis. Quo ad maxime
          atque officia maiores excepturi error repellat sunt ratione omnis,
          quia voluptatibus libero, dignissimos mollitia. Sequi, nihil quis.
          Dicta architecto eveniet odit quo itaque dignissimos voluptas alias
          laborum facilis nemo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          accusamus, natus tenetur neque non libero eaque atque nemo nostrum!
          Omnis!
        </p>
        <a href className="btn btn-success btn-icon">
          <i className="fa-solid fa-arrow-right" /> Learn More
        </a>
      </div>
      <div classname="col-md-6 py-5 text-center">
        <i classname="fa-solid fa-bullseye mx-auto" />
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi
          laborum error aliquam modi cum nostrum iusto blanditiis. Quo ad maxime
          atque officia maiores excepturi error repellat sunt ratione omnis,
          quia voluptatibus libero, dignissimos mollitia. Sequi, nihil quis.
          Dicta architecto eveniet odit quo itaque dignissimos voluptas alias
          laborum facilis nemo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          accusamus, natus tenetur neque non libero eaque atque nemo nostrum!
          Omnis!
        </p>
        <a className="btn btn-success btn-icon">
          <i className="fa-solid fa-arrow-right" /> Learn More
        </a>
      </div>
    </div>
  </div>
</div> */}

      <div className="counter text-center py-5">
        <div className="container py-5">
          <div className="col-md-12 py-5">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <span className="fa-3x">{fileContent}</span>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              fugit?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              doloremque beatae necessitatibus laborum, non ratione pariatur
              placeat ea ab culpa?
            </p>
            <span className="fa-3x">95%</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              voluptas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
