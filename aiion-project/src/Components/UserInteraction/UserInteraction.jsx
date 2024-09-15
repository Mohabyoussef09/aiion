// import React, { useContext } from "react";
// import { GlobalContext } from "../Context/GlobalContext";

// import userImg from "../../assets/images/BINARY ICONS.png";

// function UserInteraction() {
//   const { paragraphs } = useContext(GlobalContext);

//   return (
//     <>
//       <div className="user-interaction bg-body-secondary py-5">
//         <div className="container py-5">
//           <h1 className="mb-5 text-center">User Interaction</h1>

//           <div className="row">
//             <div className="col-md-6 d-flex justify-content-center">
//                 <img src={userImg}/>
//             </div>
//             <div className="col-md-6 d-flex align-items-center">
//               <p className="fs-5 text-start">{paragraphs[1]}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserInteraction;


import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import userImg from "../../assets/images/BINARY ICONS.png";

function UserInteraction() {
  const { paragraphs } = useContext(GlobalContext);

  return (
    <section className="user-interaction py-5">
      <div className="container py-5">
        <h1 className="section-title text-center mb-5">User Interaction</h1>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={userImg} className="user-img img-fluid" />
          </div>
          <div className="col-md-6">
            <p className="user-text fs-5 text-start">{paragraphs[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInteraction;

