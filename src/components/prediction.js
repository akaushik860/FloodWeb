import React from "react";

export default function prediction() {
  return (
    <div>
      <br></br>
      <h1 className="text-center" id="predict">
        Flood Prediction and Work
      </h1>
      <br></br>
      <div className="container">
        <h6>
          Flood forecasting is the estimation of future water levels or flows at
          a single or multiple sites of a river system for different lead times.
          Precise and reliable forecasting is important for flood warning, flood
          control planning, and rehabilitation. Of the several models available
          for flood forecasting, soft computing technique–based models are often
          better in terms of accuracy and reliability for operational flood
          forecasting systems, irrespective of data scarcity issues.
        </h6>
        <br />
        <br />

        <h4 className="text-primary">
        Click below to redirect to the Flood Prediction Model.
        </h4>
        <br />
        <div className="container ">
          <button type="button" class="btn btn-success btn-lg ">
            Click Here
          </button>
        </div>
        <br />
        <br />
        <h4 className="text-danger">
          {" "}
          Find our review paper named as "A Survey on Flood
          Prediction analysis based on ML" by clicking below link.
        </h4>
        <div className="container">
          <a href="https://ieeexplore.ieee.org/document/9753396" target="_blank">
          <button type="button" class="btn btn-success btn-lg ">
            Click Here
          </button>
          </a>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
