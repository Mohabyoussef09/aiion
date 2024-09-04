import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Loading from "../Loading/Loading";

function SingleInput() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSingleInputs(values) {
    setLoading(true);

    axios
      .post("http://localhost:3000/sum", values)
      .then((res) => {
        setTimeout(() => {
          setResponse(res);
          setLoading(false); 
        }, 2000); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const formik = useFormik({
    initialValues: {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
      h: "",
      i: "",
    },
    onSubmit: handleSingleInputs,
  });

  function handleClear() {
    formik.resetForm();
    setResponse(null);
  }

  return (
    <>
      <div className="container container-form my-5 rounded p-3">
        <div className="row">
          <div className="col-md-2">
            <h3>Explanation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              nesciunt. Porro, fuga tenetur modi voluptates id maiores
              repudiandae doloremque quibusdam.
            </p>
          </div>
          <div className="col-md-7 form-section text-dark p-4">
            <h3 className="mb-4">Free Trial</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 1"
                    name="a"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.a}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 2"
                    name="b"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.b}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 3"
                    name="c"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.c}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 4"
                    name="d"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.d}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 5"
                    name="e"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.e}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 6"
                    name="f"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.f}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 7"
                    name="g"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.g}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 8"
                    name="h"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.h}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Input 9"
                    name="i"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.i}
                  />
                </div>
              </div>
              <div className="flex d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-primary">
                  Predict
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger mx-2"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3 text-center text-md-start welcome-section">
            <h3 className="mb-3 text-center">Results</h3>
            <div className="d-flex justify-content-center align-items-center h-75">
              {loading ? (
                <Loading />
              ) : (
                <table
                  className="table table-striped table-bordered table-hover table-sm table-responsive"
                  style={{display: response !== null ? 'block' : 'none'}} 
                >
                  <thead>
                    <tr>
                      <th>Classical Geothermometers</th>
                      <th className="align-middle">T(C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Temp</td>
                      <td>{response !== null ? <span>{response.data.sum}</span> : "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Quartz (four&pott82)</td>
                      <td>{response !== null ? <span>{response.data.sum}</span> : "N/A"}</td>
                    </tr>
                    <tr>
                      <td>am.Silica (four77)</td>
                      <td>{response !== null ? <span>{response.data.sum}</span> : "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Chalcedony (four77)</td>
                      <td>{response !== null ? <span>{response.data.sum}</span> : "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Na-K-Ca (four&true73)</td>
                      <td>{response !== null ? <span>{response.data.sum}</span> : "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Na-K (gigg88)</td>
                      <td>{response !== null ? <span>{response.data.sum}</span> : "N/A"}</td>
                    </tr>
                    <tr>
                      <td>K-Mg (gigg88)</td>
                      <td>{response !== null ? <span>{response.data.sum}</span> : "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Na-Li (foui&mich81)</td>
                      <td>{response !== null ? <span>{response.data.sum}</span> : "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleInput;









// import React, { useState } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import Loading from "../Loading/Loading";

// function SingleInput() {
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);

//   function handleSingleInputs(values) {
//     setLoading(true);

//     axios
//       .post("http://localhost:3000/sum", values)
//       .then((res) => {
//         setTimeout(() => {
//           console.log(res);

//           setResponse(res.data.sum);
//           setLoading(false);
//         }, 2000);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }

//   const formik = useFormik({
//     initialValues: {
//       ph: "",
//       ec: "",
//       k: "",
//       na: "",
//       mg: "",
//       ca: "",
//       cl: "",
//       sio2: "",
//       f: "",
//     },
//     onSubmit: handleSingleInputs,
//   });

//   function handleClear() {
//     formik.resetForm();
//     setResponse(null);
//   }

//   return (
//     <>
//       <div className="container container-form my-5 rounded p-3">
//         <div className="row">
//           <div className="col-md-2">
//             <h3>Explanation</h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
//               nesciunt. Porro, fuga tenetur modi voluptates id maiores
//               repudiandae doloremque quibusdam.
//             </p>
//           </div>
//           <div className="col-md-7 form-section text-dark p-4">
//             <h3 className="mb-4">Free Trial</h3>
//             <form onSubmit={formik.handleSubmit}>
//               <div className="row">
//                 <div className="col-12 col-md-6 mb-3">
//                   <label htmlFor="ph">ph</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="ph"
//                     name="ph"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.ph}
//                   />

//                   <label htmlFor="ec">ec</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="ec"
//                     name="ec"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.ec}
//                   />

//                   <label htmlFor="k">k</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="k"
//                     name="k"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.k}
//                   />

//                   <label htmlFor="na">na</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="na"
//                     name="na"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.na}
//                   />

//                   <label htmlFor="mg">mg</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="mg"
//                     name="mg"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.mg}
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label htmlFor="ca">ca</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="ca"
//                     name="ca"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.ca}
//                   />

//                   <label htmlFor="cl">cl</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="cl"
//                     name="cl"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.cl}
//                   />

//                   <label htmlFor="sio2">sio2</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="sio2"
//                     name="sio2"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.sio2}
//                   />

//                   <label htmlFor="f">f</label>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="f"
//                     name="f"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.f}
//                   />
//                 </div>
//               </div>
//               <div className="flex d-flex justify-content-center">
//                 <button type="submit" className="btn btn-outline-primary">
//                   Predict
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-danger mx-2"
//                   onClick={handleClear}
//                 >
//                   Clear
//                 </button>
//               </div>
//             </form>
//           </div>

//           <div className="col-md-3 text-center text-md-start welcome-section">
//             <h3 className="mb-3 text-center">Results</h3>
//             <div className="d-flex justify-content-center align-items-center h-75">
//               {loading ? (
//                 <Loading />
//               ) : (
//                 <table
//                   className="table table-striped table-bordered table-hover table-sm table-responsive"
//                   style={{ display: response !== null ? "block" : "none" }}
//                 >
//                   <thead>
//                     <tr>
//                       <th>Classical Geothermometers</th>
//                       <th className="align-middle">T(C)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Temp</td>
//                       <td>
//                         {response !== null ? <span>{response}</span> : "N/A"}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Quartz (four&pott82)</td>
//                       <td>
//                         {response !== null ? (
//                           <span>{response.quartz}</span>
//                         ) : (
//                           "N/A"
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>am.Silica (four77)</td>
//                       <td>
//                         {response !== null ? (
//                           <span>{response.silica}</span>
//                         ) : (
//                           "N/A"
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Chalcedony (four77)</td>
//                       <td>
//                         {response !== null ? (
//                           <span>{response.chalcedony}</span>
//                         ) : (
//                           "N/A"
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Na-K-Ca (four&true73)</td>
//                       <td>
//                         {response !== null ? (
//                           <span>{response.na - k - ca}</span>
//                         ) : (
//                           "N/A"
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Na-K (gigg88)</td>
//                       <td>
//                         {response !== null ? (
//                           <span>{response.na - k}</span>
//                         ) : (
//                           "N/A"
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>K-Mg (gigg88)</td>
//                       <td>
//                         {response !== null ? (
//                           <span>{response.k - mg}</span>
//                         ) : (
//                           "N/A"
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Na-Li (foui&mich81)</td>
//                       <td>
//                         {response !== null ? (
//                           <span>{response.na - li}</span>
//                         ) : (
//                           "N/A"
//                         )}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleInput;


