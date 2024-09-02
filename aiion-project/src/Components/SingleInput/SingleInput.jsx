import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

function SingleInput() {
  const [sum, setSum] = useState(null);

  function handleSingleInputs(values) {
    console.log(values);

    axios
      .post("http://localhost:3000/sum", values)
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
      <div className="container container-form my-5 rounded p-3">
        <div className="row">
          <div className="col-12 col-md-3 p-4 text-center text-md-start welcome-section">
            <h3 className="mb-3">Welcome</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam harum accusantium excepturi ex fugiat tempore!
            </p>
            <button className="btn btn-light w-100 mt-3">Login</button>
          </div>
          <div className="col-12 col-md-9 form-section text-dark p-4">
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
              <button type="submit" className="btn btn-outline-primary w-100">Predict</button>
            </form>
            {sum !== null && (
              <div className="mt-4">
                <h4 className="text-center">Sum: {sum}</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleInput;
