// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHippo } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="info mb-5">
              <img src="img/logo.png" alt="" className="mb-4" />
              <p className="mb-5">
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
              <div className="copyright">
                Creadted By <span> Graphberry</span>
                <div>
                  &copy; 2024 - <span>Bondi Inc</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5 className="text-light">Links</h5>
              <ul className="list-unstyled lh-lg">
                <li>Home</li>
                <li>Our Services</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Support</li>
                <li>Terms and Condition</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5 className="text-light">About Us</h5>
              <ul className="list-unstyled lh-lg">
                <li>Sign In</li>
                <li>Register</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="container">
              <h5 className="text-center text-white">Contact Us</h5>
              <p className="lh-lg mt-3 mb-3">
                Get in touch with us via mail phone.We are waiting for your call
                or message
              </p>
              <a className="btn rounded-pill main-btn w-100 pb-4 pt-4" href="#">
                wasim@gmail.com
              </a>
              <ul className="d-flex mt-3 list-unstyled gap-3">
                <li>
                  <a className="d-block text-light" href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-lg facebook rounded-circle p-2 "
                    />
                  </a>
                </li>
                <li>
                  <a className="d-block text-light" href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa-lg twitter rounded-circle p-2 "
                    />
                  </a>
                </li>
                <li>
                  <a className="d-block text-light" href="#">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fa-lg linkedin rounded-circle p-2"
                    />
                  </a>
                </li>
                <li>
                  <a className="d-block text-light" href="#">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className=" fa-lg youtube rounded-circle p-2 "
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
