import React, { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Menu from "../Images/menu.png";
import CloseBtn from "../Images/Close.png";

function NavBar() {
  let [isNavBarOpened, setIsNavBarOpened] = useState<boolean>(false);
  let location = useLocation();

  function toggleMobileNav(): void {
    setIsNavBarOpened(!isNavBarOpened);
  }
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="line"></div>
      <div className="harmburger" onClick={toggleMobileNav}>
        <img src={Menu} alt="menu-line" />
      </div>
      <nav className={`${"nav-bar"} ${isNavBarOpened ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMobileNav}>
          <img src={CloseBtn} alt="close button" />
        </div>
        <div className={`${"nav-bar-a"} ${isNavBarOpened ? "active" : ""}`}>
          <Link
            to="/"
            onClick={toggleMobileNav}
            className={location.pathname === "/" ? "selected" : ""}
          >
            <span className="nav-num">00</span> &nbsp;&nbsp; HOME
          </Link>
          <Link
            to="/destination"
            onClick={toggleMobileNav}
            className={location.pathname === "/destination" ? "selected" : ""}
          >
            <span className="nav-num">01</span> &nbsp;&nbsp; DESTINATION
          </Link>
          <Link
            to="/crew"
            onClick={toggleMobileNav}
            className={location.pathname === "/crew" ? "selected" : ""}
          >
            <span className="nav-num">02</span> &nbsp;&nbsp; CREW
          </Link>
          <Link
            to="/technology"
            onClick={toggleMobileNav}
            className={location.pathname === "/technology" ? "selected" : ""}
          >
            <span className="nav-num">03</span> &nbsp;&nbsp; TECHNOLOGY
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
