import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

import hand from "../../assets/images/HAND.svg";

function FutureDirections() {
  const { paragraphs } = useContext(GlobalContext);

  return (
    <>
      <div className="future-directions py-5 bg-body-tertiary">
        <div className="container py-5">
          <h1 className="mb-5 text-center">Future Directions</h1>

          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
                <img src={hand} className="w-50 rounded-circle" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="fs-5 p-3 text-left">{paragraphs[4]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FutureDirections;
