import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Loading from "../Loading/Loading";

function SingleInput() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chargeBalance, setChargeBalance] = useState(null);

  function handleSingleInputs(values) {
    console.log(values);
    setLoading(true);

    axios
      .post("http://127.0.0.1:8000/sum-inputs", values)

      .then((res) => {
        setTimeout(() => {
          console.log(res);
          setResponse(res.data.sum);
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


  function handleChargeBalance() {
      const { ph, ca } = formik.values;
      const res = Number(ph) + Number(ca);
      setChargeBalance(res);
    }

  function handleClear() {
    formik.resetForm();
    setResponse(null);
    setChargeBalance(null);
  }

  return (
    <>
      <div className="container container-form my-5 rounded py-3">
        <div className="row">
          <div className="col-md-3 p-3">
            <h3 className="text-white text-center">Explanation</h3>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              nesciunt. Porro, fuga tenetur modi voluptates id maiores
              repudiandae doloremque quibusdam.
            </p>
          </div>
          <div className="col-md-6 form-section p-3">
            <h3 className="text-center mb-4">Try Model</h3>
            <form onSubmit={formik.handleSubmit}>
              <table className="table table-striped table-bordered table-hover table-sm table-responsive">
                <thead>
                  <tr>
                    <th className="text-center align-middle">
                      System Parameters
                    </th>
                    <th className="text-center align-middle">Cations</th>
                    <th className="text-center align-middle">Anions</th>
                    <th className="text-center align-middle">Optional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        name="ph"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ph}
                        className="form-control"
                        type="text"
                        placeholder="pH"
                      />

                      <input
                        className="form-control"
                        type="text"
                        placeholder="Ionic Strength"
                      />

                      <input
                        name="sio2"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sio2}
                        className="form-control"
                        type="text"
                        placeholder="Sio2"
                      />
                    </td>
                    <td>
                      <input
                        name="k"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.k}
                        className="form-control"
                        type="text"
                        placeholder="K+"
                      />
                      <input
                        name="na"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.na}
                        className="form-control"
                        type="text"
                        placeholder="Na+"
                      />
                      <input
                        name="mg"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mg}
                        className="form-control"
                        type="text"
                        placeholder="Mg2+"
                      />
                      <input
                        name="ca"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ca}
                        className="form-control"
                        type="text"
                        placeholder="Ca2+"
                      />
                    </td>
                    <td>
                      <input
                        name="cl"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cl}
                        className="form-control"
                        type="text"
                        placeholder="Cl-"
                      />

                      <input
                        className="form-control"
                        type="text"
                        placeholder="SO4-2"
                      />

                      <input
                        className="form-control"
                        type="text"
                        placeholder="HCO3-"
                      />
                    </td>

                    <td>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="SO4"
                      />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="HCO3"
                      />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Sample Depth Input"
                      />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Surface Temperature"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex d-flex justify-content-center">
                <button
                  type="button"
                  onClick={handleChargeBalance}
                  className="btn btn-secondary mx-2"
                >
                  Charge Balance %
                </button>

                <button
                  type="submit"
                  className="btn predict-btn"
                  disabled={
                    chargeBalance === null || chargeBalance === "Invalid"
                  }
                >
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

          <div className="col-md-3 p-3">
            <h3 className="text-center text-white">Results</h3>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <table className="table table-striped table-bordered table-hover table-sm table-responsive">
                <thead>
                  <tr>
                    <th className="text-center">Charge Balance %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      {chargeBalance !== null ? (
                        <span>{chargeBalance}</span>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              {loading ? (
                <Loading />
              ) : (
                <table
                  className="table table-striped table-bordered table-hover table-sm table-responsive"
                  // style={{ display: response !== null ? "block" : "none" }}
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
                      <td>Quartz⁴</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>Na/K²</td>
                      <td>
                        {response !== null ? <span>{response}</span> : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td>Na/K⁷</td>
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
                  </tbody>
                </table>
              )}

              <table className="table table-striped table-bordered table-hover table-sm table-responsive">
                <thead>
                  <tr>
                    <th className="text-center">Geothermal Gradient</th>
                    <th className="text-center">Water Type</th>
                    <th className="text-center">Water Maturity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      {response !== null ? <span>{response}</span> : "N/A"}
                    </td>
                    <td className="text-center">
                      {response !== null ? <span>{response}</span> : "N/A"}
                    </td>
                    <td className="text-center">
                      {response !== null ? <span>{response}</span> : "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleInput;
