import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Loading from "../Loading/Loading";

function SingleInput() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSingleInputs(values) {
    setLoading(true);

    // Ensure all 9 input values are being sent correctly
    const requestData = {
      ph: values.ph,
      ec: values.ec,
      k: values.k,
      na: values.na,
      mg: values.mg,
      ca: values.ca,
      cl: values.cl,
      sio2: values.sio2,
      f: values.f,
    };

    axios
      .post("http://127.0.0.1:8000/temperature", requestData) // Adjust the URL if needed
      .then((res) => {
        setTimeout(() => {
          console.log(res);

          // Assuming the API response format is { "temperature": 22.2 }
          setResponse(res.data.temperature);
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
      ph: "",
      ec: "",
      k: "",
      na: "",
      mg: "",
      ca: "",
      cl: "",
      sio2: "",
      f: "",
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
          <div className="col-md-7 form-section p-4">
            <h3 className="mb-4">Try Model</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="ph">PH</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="ph"
                    name="ph"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ph}
                  />

                  <label htmlFor="ec">EC</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="ec"
                    name="ec"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ec}
                  />

                  <label htmlFor="k">K</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="k"
                    name="k"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.k}
                  />

                  <label htmlFor="na">NA</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="na"
                    name="na"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.na}
                  />

                  <label htmlFor="mg">MG</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="mg"
                    name="mg"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mg}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="ca">CA</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="ca"
                    name="ca"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ca}
                  />

                  <label htmlFor="cl">CL</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="cl"
                    name="cl"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cl}
                  />

                  <label htmlFor="sio2">SIO2</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="sio2"
                    name="sio2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sio2}
                  />

                  <label htmlFor="f">F</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="f"
                    name="f"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.f}
                  />
                </div>
              </div>
              <div className="flex d-flex justify-content-center">
                <button type="submit" className="btn btn-success">
                  Predict
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
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
                  style={{ display: response !== null ? "block" : "none" }}
                >
                  <thead>
                    <tr>
                      <th>Classical Geothermometers</th>
                      <th className="align-middle">T(C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Temperature</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>Quartz</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>Am.Silica</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>Chalcedony</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>Na-K-Ca</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>Na-K</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>K-Mg</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>Na-Li</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
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
