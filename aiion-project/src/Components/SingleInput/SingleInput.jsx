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

  function handleClear() {
    formik.resetForm();
    setSum(null);
  }

  const tableStyle = {
    fontFamily: `'IBM Plex Mono', monospace`,
  };

  return (
    <>
      <div className="container container-form my-5 rounded p-3">
        <div className="row">
          <div className="col-md-2">
            <h3>Explanation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nesciunt. Porro, fuga tenetur modi voluptates id maiores repudiandae doloremque quibusdam.</p>
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
            <h3 className="mb-3">Result</h3>

            <table
              className="table table-striped table-bordered table-hover table-sm table-responsive"
              style={tableStyle}
            >
              <thead>
                <tr>
                  <th>classical geothermometers</th>
                  <th className="align-middle">t(C)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>temp</td>
                  <td>{sum !== null ? <span>{sum}</span> : "N/A"}</td>
                </tr>
                <tr>
                  <td>quartz (four&pott82)</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>am.silica (four77)</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>chalcedony (four77)</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>na-k-ca (four&true73)</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>na-k (gigg88)</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>k-mg (gigg88)</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>na-li (foui&mich81)</td>
                  <td className="align-middle">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}

export default SingleInput;
