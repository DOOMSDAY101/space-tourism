import React from "react";
import NavBar from "../Components/NavBar";
import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="home-page-content">
        <div className="home-page-text">
          <p className="text-travel-1">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-travel-h1">SPACE</h1>
          <p className="text-travel-2">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experiences!
          </p>
        </div>
        <div className="display-button">
          <div className="explore">EXPLORE</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
