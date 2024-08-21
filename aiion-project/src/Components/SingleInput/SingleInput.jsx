import React from "react";

import { useFormik } from "formik";

import axios from "axios";

function SingleInput() {
  function handleSingleInputs(values) {
    console.log(values);

    axios
      .post("//api", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let formik = useFormik({
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
      <div className="form-container">
        <div className="form-box shadow-lg p-4">
          <h2 className="mb-4 text-center text-success">Free Trial</h2>
          <form onSubmit={formik.handleSubmit} className="row g-3">
            <div className="col-md-4">
              <label htmlFor="input1" className="form-label">
                Input 1
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.a}
                name="a"
                type="text"
                className="form-control"
                id="input1"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="input2" className="form-label">
                Input 2
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.b}
                name="b"
                type="text"
                className="form-control"
                id="input2"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="input3" className="form-label">
                Input 3
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.c}
                name="c"
                type="text"
                className="form-control"
                id="input3"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="input4" className="form-label">
                Input 4
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.d}
                name="d"
                type="text"
                className="form-control"
                id="input4"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="input5" className="form-label">
                Input 5
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.e}
                name="e"
                type="text"
                className="form-control"
                id="input5"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="input6" className="form-label">
                Input 6
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.f}
                name="f"
                type="text"
                className="form-control"
                id="input6"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="input7" className="form-label">
                Input 7
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.g}
                name="g"
                type="text"
                className="form-control"
                id="input7"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="input8" className="form-label">
                Input 8
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.h}
                name="h"
                type="text"
                className="form-control"
                id="input8"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="input9" className="form-label">
                Input 9
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.i}
                name="i"
                type="text"
                className="form-control"
                id="input9"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success btn-lg">
                Predict
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SingleInput;
