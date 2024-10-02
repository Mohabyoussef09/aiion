function ExploreModel() {
  return (
    <>
      <div className="explore-model py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card border border-bg-light-subtle rounded-3 shadow">
                <div className="card-body p-5">
                  <h1 className="card-title mb-4 text-center">
                    Explore the Model
                  </h1>
                  <p className="card-text text-center fs-5">
                    AiION Runs In Single And Multiple Modes:
                  </p>
                  <hr className="my-4" />
                  <ul className="list-unstyled fs-5">
                    <li className="mb-3">
                      <i className="fa-solid fa-angles-right me-2"></i>
                      <span>
                        For single input: input your geochemical data in “The
                        Model” tab.
                      </span>
                    </li>
                    <li className="mb-3">
                      <i className="fa-solid fa-angles-right me-2"></i>
                      <span>
                        For multiple inputs: you will require a CSV file with
                        data organized similar to the
                        <a
                          href="multi"
                          className="link-template text-uppercase fw-bold mx-1"
                        >
                          template
                        </a>{" "}
                        file.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <p className="text-muted fs-5">OUTPUT:</p>
                    <p className="fs-5">
                      Predicted subsurface temperature, common classical
                      geothermometers calculations, graphical output of
                      predicted data over diagrams.
                    </p>
                    <div className="mt-4">
                      <a href="/" className="btn btn-explore">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreModel;
