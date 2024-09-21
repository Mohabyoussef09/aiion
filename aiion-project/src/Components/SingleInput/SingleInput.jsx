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
      .post("http://127.0.0.1:8000/temperature", values)

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
      so4_2: "",
      hco3_: "",
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
      const { k, na, mg2, ca2, cl, so4_2, hco3_ } = formik.values;
      const ct_sum = Number(k) + Number(na) + Number(mg2) + Number(ca2);
      const an_sum = Number(cl) + Number(so4_2) + Number(hco3_);
      const res = ((ct_sum - an_sum) / (ct_sum + an_sum)) * 100
      const toFixed_res = Number(res.toFixed(2))      
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
      <div className="container my-5 rounded py-3">
        <div className="row">
        
          <div className="col-md-9 form-section">
            <h2 className="text-center mb-4">Try Model</h2>
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
                      <label htmlFor="surfaceTemp">Surface Temperature</label>
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
              <div className="flex d-flex justify-content-center">
                <button
                  type="button"
                  onClick={handleChargeBalance}
                  className="btn btn-secondary mx-2"
                >
                  {chargeLoading ? (
                    <i className="fa-solid fa-circle-notch fa-spin"></i>
                  ) : (
                    "Charge Balance %"
                  )}
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

          <div className="col-md-3 p-3 table-section">
            <h2 className="text-center text-white">Results</h2>
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
                <>
                  <table className="table table-striped table-bordered table-hover table-sm table-responsive">
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
