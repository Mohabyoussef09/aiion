

import React, { useState } from "react";

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

    const reader = new FileReader();
    reader.onloadend = () => {
      const myData = reader.result.split(",")[1];
      console.log(myData);

      localStorage.setItem(
        "uploadedFile",
        JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          fileData: myData,
        })
      );

      setUploadStatus("File uploaded to local storage successfully!");
      setFile(null);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center upload-box p-5">
          <i className="fas fa-file-upload fa-5x mb-3 upload-icon"></i>
          <p className="upload-text ">
            Drag and drop a file to upload
          </p>

          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <div className="d-flex">
            <label htmlFor="fileInput" className="btn btn-upload">
              {file ? file.name : "Choose File"}
            </label>

            <button
              onClick={handleUpload}
              className="btn btn-predict ms-3"
              disabled={!file}
            >
              Predict
            </button>
          </div>

          <p className="text-center upload-status mt-4">{uploadStatus}</p>
        </div>
      </div>
    </div>
  );
}

export default MultiInputs;
