import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

import hand from "../../assets/images/HAND.svg";

function FutureDirections() {
  const { paragraphs } = useContext(GlobalContext);

  return (
    <>
      <div className="future-directions py-5">
        <div className="container">
          <h1 className="mb-5 text-center">Future Directions</h1>

          <div className="row">
            <div className="col-md-6">
                <img src={hand} className="w-50 rounded-circle" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="fs-5 text-start">{paragraphs[4]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FutureDirections;
