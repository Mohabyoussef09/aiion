import React, { useState } from "react";

const handleDownload = () => {
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTeI-OxNquR2Gym7hhgbW77k-Py5D949E94uT-M8fjyFPVC4Bd-rSAK44f1rUgVj3jLh8SbaI5WLr1W/pub?output=xlsx";
  window.open(sheetUrl, "_blank");
};

function MultiInputs() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setUploadStatus("");
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // Replace this URL with your Flask server URL
    fetch("https://aiion.ai/testapp/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // The response from the Flask server
        setUploadStatus("File uploaded to server successfully!");
        setFile(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        setUploadStatus("Failed to upload file.");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 d-flex flex-column align-items-center upload-box p-4 p-md-5">
          <i className="fas fa-file-upload fa-4x fa-md-5x mb-3 upload-icon"></i>
          <p className="upload-text text-center">
            Drag and drop a file to upload
          </p>

          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <label
              htmlFor="fileInput"
              className="btn btn-upload w-100 mt-3 btn-no-wrap"
            >
              {file ? file.name : "Choose File"}
            </label>

            <button
              onClick={handleUpload}
              className="btn btn-predict ms-md-3 w-100 mt-3"
              disabled={!file}
            >
              Predict
            </button>

            <button
              className="btn btn-download ms-md-3 w-100 mt-3"
              onClick={handleDownload}
            >
              <i className="fa-solid fa-download me-2"></i>
              Download Template
            </button>
          </div>

          <p className="text-center upload-status mt-4">{uploadStatus}</p>
        </div>
      </div>
    </div>
  );
}

export default MultiInputs;
