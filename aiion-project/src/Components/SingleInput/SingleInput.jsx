// import React, { useState } from "react";

// import { useFormik } from "formik";

// import axios from "axios";

// function SingleInput() {

//   function handleSingleInputs(values) {
//     console.log(values);

//     axios
//       .post('', values)
//       .then((res) => {
//         console.log(res);
        
//   })
//       .catch((err) => {
//         console.log(err);

//       });
//   }

//   let formik = useFormik({
//     initialValues: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: "",
//       g: "",
//       h: "",
//       i: "",
//     },
//     onSubmit: handleSingleInputs,
//   });

//   return (
//     <>
//       <div className="form">
//         <div className="container p-5">
//           <div className="card shadow-lg">
//             <div className="card-body p-5">
//               <h2 className="text-center mb-4 text-success">Free Trial</h2>
//               <form onSubmit={formik.handleSubmit} className="row g-3">
//                 <div className="form-group">
//                   <label htmlFor="input1" className="form-label">
//                     Input 1
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.a}
//                     name="a"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input1"
//                     placeholder={`Enter value for Input 1`}
//                   />
//                   <label htmlFor="input2" className="form-label">
//                     Input 2
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.b}
//                     name="b"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input2"
//                     placeholder={`Enter value for Input 2`}
//                   />
//                   <label htmlFor="input3" className="form-label">
//                     Input 3
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.c}
//                     name="c"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input3"
//                     placeholder={`Enter value for Input 3`}
//                   />
//                   <label htmlFor="input4" className="form-label">
//                     Input 4
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.d}
//                     name="d"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input4"
//                     placeholder={`Enter value for Input 4`}
//                   />
//                   <label htmlFor="input5" className="form-label">
//                     Input 5
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.e}
//                     name="e"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input5"
//                     placeholder={`Enter value for Input 5`}
//                   />
//                   <label htmlFor="input6" className="form-label">
//                     Input 6
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.f}
//                     name="f"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input6"
//                     placeholder={`Enter value for Input 6`}
//                   />
//                   <label htmlFor="input7" className="form-label">
//                     Input 7
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.g}
//                     name="g"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input7"
//                     placeholder={`Enter value for Input 7`}
//                   />
//                   <label htmlFor="input8" className="form-label">
//                     Input 8
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.h}
//                     name="h"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input8"
//                     placeholder={`Enter value for Input 8`}
//                   />
//                   <label htmlFor="input9" className="form-label">
//                     Input 9
//                   </label>
//                   <input
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.i}
//                     name="i"
//                     type="text"
//                     className="form-control form-control-lg"
//                     id="input9"
//                     placeholder={`Enter value for Input 9`}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-success btn-lg w-100">
//                   Predict
//                 </button>
//               </form>
              

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleInput;


// import React from "react";
// import { useFormik } from "formik";
// import axios from "axios";

// function SingleInput() {

//   function handleSingleInputs(values) {
//     console.log(values);

//     axios
//       .post('YOUR_API_ENDPOINT', values) // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
//       .then((res) => {
//         console.log(res);
//         // Handle success, maybe show a success message or redirect
//       })
//       .catch((err) => {
//         console.log(err);
//         // Handle error, maybe show an error message
//       });
//   }

//   const formik = useFormik({
//     initialValues: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: "",
//       g: "",
//       h: "",
//       i: "",
//     },
//     onSubmit: handleSingleInputs,
//   });

//   return (
//     <>
//       <div className="form">
//         <div className="container p-5">
//           <div className="card shadow-lg">
//             <div className="card-body p-5">
//               <h2 className="text-center mb-4 text-success">Free Trial</h2>
//               <form onSubmit={formik.handleSubmit} className="row g-3">
//                 {["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((inputName, index) => (
//                   <div key={inputName} className="form-group">
//                     <label htmlFor={`input${index + 1}`} className="form-label">
//                       {`Input ${index + 1}`}
//                     </label>
//                     <input
//                       onBlur={formik.handleBlur}
//                       onChange={formik.handleChange}
//                       value={formik.values[inputName]}
//                       name={inputName}
//                       type="text"
//                       className="form-control form-control-lg"
//                       id={`input${index + 1}`}
//                       placeholder={`Enter value for Input ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//                 <button type="submit" className="btn btn-success btn-lg w-100">
//                   Predict
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleInput;



import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

function SingleInput() {

    const [sum, setSum] = useState(null);

  function handleSingleInputs(values) {
    console.log(values);

    axios
      .post('http://localhost:3000/sum', values)
      .then((res) => {
        console.log(res.data);
        setSum(res.data.sum);
      })
      .catch((err) => {
        console.log(err);
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

  return (
    <>
      <div className="form">
        <div className="container p-5">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h2 className="text-center mb-4 text-success">Free Trial</h2>
              <form onSubmit={formik.handleSubmit} className="row g-3">
                {["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((inputName, index) => (
                  <div key={inputName} className="form-group">
                    <label htmlFor={`input${index + 1}`} className="form-label">
                      {`Input ${index + 1}`}
                    </label>
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values[inputName]}
                      name={inputName}
                      type="text"
                      className="form-control form-control-lg"
                      id={`input${index + 1}`}
                      placeholder={`Enter value for Input ${index + 1}`}
                    />
                  </div>
                ))}
                <button type="submit" className="btn btn-success btn-lg w-100">
                  Predict
                </button>
              </form>

              {sum !== null && (
                <div className="mt-4">
                  <h3 className="text-center">Sum: {sum}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleInput;

