// Navbar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
/*
1-- home
2-- about 
3-- Contact
4--SocialMedia
*/
export default function Navbar(page) {
  const { page: pageName } = page;
  return (
    <nav className="navbar navbar-expand-lg sticky-top pt-35 pb-3">
      <div className="container mb-2">
        <a className="navbar-brand" href="#">
          <img src={require("../../assets/img/logo/logo2_footer.png")} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid">
            {" "}
            <FontAwesomeIcon
              icon={faBars}
              className=" fa-lg  rounded-circle p-2 "
            />
          </i>
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link p-lg-3 ${pageName === 1 ? "active" : ""}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link p-lg-3 ${pageName === 4 ? "active" : ""}`}
                href="/socialmedia"
              >
                Social Media
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link p-lg-3" href="#">
                Portfolio
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className={`nav-link p-lg-3 ${pageName === 2 ? "active" : ""}`}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link p-lg-3 ${pageName === 3 ? "active" : ""}`}
                href="contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="search ps-3 pe-3 d-none d-lg-block">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <a className="btn rounded-pill main-btn pt-4 pb-4" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
