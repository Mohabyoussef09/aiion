import React from "react";

function SingleInput() {
  return (
    <>
      <div className="form-container">
        <div className="form-box shadow-lg p-4">
          <h2 className="mb-4"></h2>
          <form className="row g-3">
            <div className="col-md-4">
              <label htmlFor="input1" className="form-label">
                Input 1
              </label>
              <input type="text" className="form-control" id="input1" />
            </div>
            <div className="col-md-4">
              <label htmlFor="input2" className="form-label">
                Input 2
              </label>
              <input type="text" className="form-control" id="input2" />
            </div>
            <div className="col-md-4">
              <label htmlFor="input3" className="form-label">
                Input 3
              </label>
              <input type="text" className="form-control" id="input3" />
            </div>
            <div className="col-md-4">
              <label htmlFor="input4" className="form-label">
                Input 4
              </label>
              <input type="text" className="form-control" id="input4" />
            </div>
            <div className="col-md-4">
              <label htmlFor="input5" className="form-label">
                Input 5
              </label>
              <input type="text" className="form-control" id="input5" />
            </div>
            <div className="col-md-4">
              <label htmlFor="input6" className="form-label">
                Input 6
              </label>
              <input type="text" className="form-control" id="input6" />
            </div>
            <div className="col-md-4">
              <label htmlFor="input7" className="form-label">
                Input 7
              </label>
              <input type="text" className="form-control" id="input7" />
            </div>
            <div className="col-md-4">
              <label htmlFor="input8" className="form-label">
                Input 8
              </label>
              <input type="text" className="form-control" id="input8" />
            </div>
            <div className="col-md-4">
              <label htmlFor="input9" className="form-label">
                Input 9
              </label>
              <input type="text" className="form-control" id="input9" />
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
