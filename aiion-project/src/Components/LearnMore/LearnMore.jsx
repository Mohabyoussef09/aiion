import React, { useContext } from "react";
import ExploreModel from "../ExplorModel/ExploreModel";
import UserInteraction from "../UserInteraction/UserInteraction";
import Info from "../Info/Info";
import FutureDirections from "../FutureDirections/FutureDirections";
import { GlobalContext } from "../Context/GlobalContext";

function LearnMore() {
  const { paragraphs } = useContext(GlobalContext);

  return (
    <>
      <div className="learn-more bg-body-tertiary py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="learn-more-shape mx-auto">
                <h3 className="text-uppercase">About Us</h3>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="fs-5">{paragraphs[0]}</p>
            </div>
          </div>
        </div>
      </div>

      <ExploreModel />
 
      <UserInteraction />




      <Info/>

      <FutureDirections /> 
    </>
  );
}

export default LearnMore;
