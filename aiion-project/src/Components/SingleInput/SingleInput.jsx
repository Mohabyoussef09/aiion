import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Loading from "../Loading/Loading";

function SingleInput() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chargeBalance, setChargeBalance] = useState(null);
  const [chargeLoading, setChargeLoading] = useState(false);

  function handleSingleInputs(values) {
    console.log(values);
    setLoading(true);

    axios
      .post("http://127.0.0.1:8082/temperature", values)

      .then((res) => {
        setTimeout(() => {
          console.log(res);
          setResponse(res.data);
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
      iStrength: "",
      sio2: "",
      k: "",
      na: "",
      mg2: "",
      ca2: "",
      cl: "",
      so4: "",
      hco3: "",
      sDepth: "",
      surfaceTemp: "",
    },
    onSubmit: handleSingleInputs,
  });

  function handleChargeBalance() {
    setChargeLoading(true);

    setTimeout(() => {
      const { k, na, mg2, ca2, cl,so4,hco3 } = formik.values;
      const ct_sum = Number(k) + Number(na) + Number(mg2) + Number(ca2);
      const an_sum = Number(cl) + Number(so4) + Number(hco3);
      const res = ((ct_sum - an_sum) / (ct_sum + an_sum)) * 100
      const toFixed_res = Number(res.toFixed(2))      
      const an_sum = Number(cl) + Number(so4_2) + Number(hco3_);
      const res = ((ct_sum - an_sum) / (ct_sum + an_sum)) * 100;
      const toFixed_res = Number(res.toFixed(2));
      setChargeBalance(toFixed_res);
      setChargeLoading(false);
    }, 2000);
  }

  function handleClear() {
    formik.resetForm();
    setResponse(null);
    setChargeBalance(null);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9 form-section">
            <h2 className="text-center fw-bold">Try Model</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="d-md-flex">
                <div className="first-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center">System Parameters</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="ph">pH</label>
                          <input
                            id="ph"
                            name="ph"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ph}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="iStrength">Ionic Strength</label>
                          <input
                            id="iStrength"
                            name="iStrength"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.iStrength}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="sio2">Sio2</label>
                          <input
                            id="sio2"
                            name="sio2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.sio2}
                            className="form-control"
                            type="text"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="second-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center">Cations</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="k">K+</label>
                          <input
                            id="k"
                            name="k"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.k}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="na">Na+</label>
                          <input
                            id="na"
                            name="na"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.na}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="mg2">Mg2+</label>
                          <input
                            id="mg2"
                            name="mg2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mg2}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="ca2">Ca2+</label>
                          <input
                            id="ca2"
                            name="ca2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ca2}
                            className="form-control"
                            type="text"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="third-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center">Anions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="cl">Cl-</label>
                          <input
                            id="cl"
                            name="cl"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cl}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="so4_2">SO4-2</label>
                          <input
                            id="so4_2"
                            name="so4_2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.so4_2}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="hco3_">HCO3-</label>
                          <input
                            id="hco3_"
                            name="hco3_"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.hco3_}
                            className="form-control"
                            type="text"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="forth-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center">Optional</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="so4">SO4</label>
                          <input
                            id="so4"
                            name="so4"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.so4}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="hco3">HCO3</label>
                          <input
                            id="hco3"
                            name="hco3"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.hco3}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="sDepth">Sample Depth Input</label>
                          <input
                            id="sDepth"
                            name="sDepth"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.sDepth}
                            className="form-control"
                            type="text"
                          />
                          <label htmlFor="surfaceTemp">
                            Surface Temperature
                          </label>
                          <input
                            id="surfaceTemp"
                            name="surfaceTemp"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.surfaceTemp}
                            className="form-control"
                            type="text"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-column flex-md-row">
                <div className="col-12 col-md-auto mb-2 me-2">
                  <button
                    type="button"
                    onClick={handleChargeBalance}
                    className="btn btn-secondary w-100"
                  >
                    {chargeLoading ? (
                      <i className="fa-solid fa-circle-notch fa-spin"></i>
                    ) : (
                      "Charge Balance %"
                    )}
                  </button>
                </div>

                <div className="col-12 col-md-auto mb-2 me-2">
                  <button
                    type="submit"
                    className="btn predict-btn w-100"
                    disabled={
                      chargeBalance === null || chargeBalance === "Invalid"
                    }
                  >
                    Predict
                  </button>
                </div>

                <div className="col-12 col-md-auto mb-3">
                  <button
                    type="button"
                    className="btn btn-danger w-100"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </form>

            <div className="form-explanation">
              <h3 className="text-decoration-underline fw-bold">Explanation</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                officia sapiente aliquid quaerat illo obcaecati adipisci ab
                ullam non hic!
              </p>
            </div>
          </div>

          <div className="col-md-3 py-4 table-results-section">
            <h2 className="text-center text-white">Results</h2>
            <div>
              <table className="table">
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
                <>
                  <table className="table table-striped table-bordered">
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
                          {response !== null ? (
                            <span>{response.temp}</span>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Quartz⁴</td>
                        <td>
                          {response !== null ? (
                            <span>{response.quartz}</span>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Na/K²</td>
                        <td>
                          {response !== null ? (
                            <span>{response.na_k2}</span>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Na/K⁷</td>
                        <td>
                          {response !== null ? (
                            <span>{response.na_k7}</span>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Na-K-Ca</td>
                        <td>
                          {response !== null ? (
                            <span>{response.na_k_ca}</span>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="table table-striped table-bordered">
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
                          {response !== null ? (
                            <span>{response.geoGradient}</span>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td className="text-center">
                          {response !== null ? (
                            <span>{response.wType}</span>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td className="text-center">
                          {response !== null ? (
                            <span>{response.wMaturity}</span>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleInput;
