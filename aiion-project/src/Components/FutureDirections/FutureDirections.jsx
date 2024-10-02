import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

import hand from "../../assets/images/HAND.svg";

function FutureDirections() {
  const { paragraphs } = useContext(GlobalContext);

  return (
    <>
      <div className="future-directions py-5 bg-body-tertiary">
        <div className="container">
          <h1 className="mb-5 text-center">Future Directions</h1>

          <div className="row">
            <div className="col-md-6">
              <div className="w-100 d-flex justify-content-center">
                <img src={hand} className="rounded-circle w-75" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="fs-4">{paragraphs[4]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FutureDirections;
