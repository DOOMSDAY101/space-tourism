import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <p>
          Oops! It seems like you've drifted off course.
          <br />
          The cosmic object you were looking for has disappeared beyond the
          event horizon.
        </p>
        <Link to="/">Blast Off Again</Link>
        <Link to="/destination">Explore The Galaxy</Link>
      </div>
    </div>
  );
}

export default NotFound;
