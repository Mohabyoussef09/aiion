import React, { useState } from "react";
import axios from "axios";

function MultiInputs() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(""); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus(""); 
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploadStatus("Uploading...");

      const response = await axios.post(
        "http://httpbin.org/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setUploadStatus("File uploaded successfully!");
        setFile(null); 
      } else {
        setUploadStatus("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error uploading file.");
    }
  };

  return (
    <>
      <div className="file-uploader-container">
        <div className="file-uploader">
          <div className="upload-icon">
            <i className="fas fa-cloud-upload-alt fa-3x"></i>
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control"
          />
          <button
            onClick={handleUpload}
            className="btn btn-success mt-3"
            // disabled={!file}
          >
            Upload
          </button>
          {file && (
            <p className="mt-3 text-primary">
              Selected file: <strong>{file.name}</strong>
            </p>
          )}
          {uploadStatus && (
            <p className="mt-3 text-success">
              <strong>{uploadStatus}</strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default MultiInputs;
