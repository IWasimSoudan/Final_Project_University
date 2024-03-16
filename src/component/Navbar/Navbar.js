// Navbar.js

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
/*
1-- home
2-- about 
3-- Contact
4--SocialMedia
5-- logIN
*/

const _navbar = (page) => {
  const { page: pageName } = page;
  return (
    <Navbar expand="lg" sticky="top" className="pt-35 pb-3">
      <Container className="mb-2">
        <Navbar.Brand href="#">
          <img src={require("../../assets/img/logo/logo2_footer.png")} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0 ">
            <Nav.Item>
              <Nav.Link
                href="/"
                className={`  nav-link-custom nav-link p-lg-3 ${pageName === 1 ? "active " : ""}`}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/socialmedia"
                className={`nav-link p-lg-3 ${pageName === 4 ? "active" : ""}`}
              >
                Social Media
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="#" className="nav-link p-lg-3">Portfolio</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link
                href="/about"
                className={`nav-link p-lg-3 ${pageName === 2 ? "active" : ""}`}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/contact"
                className={`nav-link p-lg-3 ${pageName === 3 ? "active" : ""}`}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="search ps-3 pe-3 d-none d-lg-block">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <a
            href="/login"
            className={`btn rounded-pill main-btn pt-4 pb-4 ${pageName === 5 ? "active" : ""}`}
          >
            Login
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default _navbar;
