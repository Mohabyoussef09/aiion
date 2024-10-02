import React, { useContext } from "react";
import userImg from "../../assets/images/BINARY ICONS.png";
import { GlobalContext } from "../Context/GlobalContext";

function UserInteraction() {
  const { paragraphs } = useContext(GlobalContext);

  return (
    <section className="user-interaction bg-body-tertiary py-5">
      <div className="container">
        <h1 className="section-title text-center mb-5">User Interaction</h1>

        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="w-100 d-flex justify-content-center">
            <img src={userImg} className="user-img img-fluid w-75"/>

            </div>
          </div>
          <div className="col-md-6">
            <p className="user-text fs-4">{paragraphs[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInteraction;
