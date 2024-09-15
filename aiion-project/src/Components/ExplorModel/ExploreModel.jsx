import React, { useContext } from "react";

function ExplorModel() {

  return (
    <>
      <div className="explore-model py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card shadow-lg border-0 rounded-3 bg-white">
                <div className="card-body p-5">
                  <h1 className="card-title display-4 text-center mb-4">
                    Explore the Model
                  </h1>
                  <p className="card-text lead text-center text-muted">
                    AiIoN Runs In Single And Multiple Modes:
                  </p>
                  <hr className="my-4" />
                  <ul>
                    <li className="mb-3 fs-5">
                      <span>
                        For single input: input your
                        geochemical data in “The Model” tab.
                      </span>
                    </li>
                    <li className="mb-3 fs-5">
                      <span>
                        For multiple inputs: you will require a
                        CSV file with data organized similar to the
                        <a href="multi" className="link-success mx-1 text-uppercase">
                          template
                        </a>
                        file.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <p className="text-muted">OUTPUT:</p>
                    <p>
                      Predicted subsurface temperature, common classical
                      geothermometers calculations, graphical output of
                      predicted data over diagrams.
                    </p>
                    <div className="text-center mt-4">
                      <a
                        href="/"
                        className="btn btn-success btn-lg rounded-pill"
                      >
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExplorModel;
