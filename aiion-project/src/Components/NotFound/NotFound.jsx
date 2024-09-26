import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="not-found d-flex flex-column align-items-center justify-content-center bg-body-tertiary text-center p-4">
        <h1>404</h1>
        <h2 className="display-4 mt-3">Oops! Page Not Found</h2>
        <p className="lead text-muted mt-3">
          The page you're looking for might have been removed or the URL is
          incorrect.
        </p>
        <p className="text-muted mb-4">
          Please double-check the URL or go back to the homepage.
        </p>
        <Link to="/" className="btn btn-lg px-5 py-2">
          Go Back to Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
