import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function Info() {
  const { paragraphs } = useContext(GlobalContext);

  return (
    <>
      <div className="info py-5 text-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center py-3">
              <div className="info-card">
                <div className="card-body">
                  <i className="fa-solid fa-globe info-icon mb-3 mx-auto"></i>
                  <h3 className="mb-4">How The Model Works?</h3>
                  <p>{paragraphs[2]}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center py-3">
              <div className="info-card">
                <div className="card-body">
                  <i className="fa-solid fa-bullseye info-icon mb-3 mx-auto"></i>
                  <h3 className="mb-4">Training & Evaluation</h3>

                  <p>{paragraphs[3]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
