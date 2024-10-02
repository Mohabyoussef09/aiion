import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function Info() {
  const { paragraphs } = useContext(GlobalContext);

  return (
    <>
      <div className="info py-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6">
              <div className="info-card">
                <div className="card-body">
                  <i className="fa-solid fa-globe info-icon mb-3"></i>
                  <h2 className="mb-2">How The Model Works?</h2>
                  <p>{paragraphs[2]}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card">
                <div className="card-body">
                  <i className="fa-solid fa-bullseye info-icon mb-3"></i>
                  <h2 className="mb-2">Training & Evaluation</h2>
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
