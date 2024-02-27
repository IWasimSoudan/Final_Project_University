import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import "../assets/css/test2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
//<FontAwesomeIcon icon="fa-brands fa-instagram" />
const AboutPage = () => {
  return (
    <>
      <div>
        <Navbar page={2} />
        <div className="about-area mt-5 mb-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {/* <!-- Trending Tittle --> */}
                <div className="about-right mb-90">
                  <div className="about-img">
                    <img
                      src={require("../assets/img/post/about_heor.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="section-tittle mb-30 pt-30">
                    <h3>About Us</h3>
                  </div>
                  <div className="about-prea">
                    <p className="about-pera1 mb-25">
                      Moms are like…buttons? Moms are like glue. Moms are like
                      pizza crusts. Moms are the ones who make sure things
                      happen—from birth to school lunch.
                    </p>
                    <p className="about-pera1 mb-25">
                      Moms are like…buttons? Moms are like glue. Moms are like
                      pizza crusts. Moms are the ones who make sure things
                      happen—from birth to school lunch.
                    </p>
                    <p className="about-pera1 mb-25">
                      My hero when I was a kid was my mom. Same for everyone I
                      knew. Moms are untouchable. They’re elegant, smart,
                      beautiful, kind…everything we want to be. At 29 years old,
                      my favorite compliment is being told that I look like my
                      mom. Seeing myself in her image, like this daughter up
                      top, makes me so proud of how far I’ve come, and so
                      thankful for where I come from. the refractor telescope
                      uses a convex lens to focus the light on the eyepiece. The
                      reflector telescope has a concave lens which means it
                      bends in. It uses mirrors to focus the image that you
                      eventually see. Collimation is a term for how well tuned
                      the telescope is to give you a good clear image of what
                      you are looking at. You want your telescope to have good
                      collimation so you are not getting a false image of the
                      celestial body. Aperture is a fancy word for how big the
                      lens of your telescope is. But it’s an important word
                      because the aperture of the lens is the key to how
                      powerful your telescope is. Magnification has nothing to
                      do with it, its all in the aperture. Focuser is the
                      housing that keeps the eyepiece of the telescope, or what
                      you will look through, in place. The focuser has to be
                      stable and in good repair for you to have an image you can
                      rely on. Mount and Wedge. Both of these terms refer to the
                      tripod your telescope sits on. The mount is the actual
                      tripod and the wedge is the device that lets you attach
                      the telescope to the mount. Moms are like…buttons? Moms
                      are like glue. Moms are like pizza crusts. Moms are the
                      ones who make sure things happen—from birth to school
                      lunch.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle mb-40">
                  <h3>Follow Us</h3>
                </div>
                {/* <!-- Flow Socail --> */}
                <div className="single-follow mb-45">
                  <div className="single-box">
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        {/* <a href="#">
                          <img
                            src={require("../assets/img/news/icon-fb.png")}
                            alt=""
                          />
                        </a> */}
                        <a className="d-block text-light" href="#">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="fa-lg facebook rounded-circle p-2 "
                          />
                        </a>
                      </div>
                      <div className="follow-count pl-15">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        {/* <a href="#">
                          <img
                            src={require("../assets/img/news/icon-tw.png")}
                            alt=""
                          />
                        </a> */}
                        <a className="d-block text-light" href="#">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="fa-lg twitter rounded-circle p-2 "
                          />
                        </a>
                      </div>
                      <div className="follow-count pl-15">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        {/* <a href="#">
                          <img
                            src={require("../assets/img/news/icon-ins.png")}
                            alt=""
                          />
                        </a> */}
                        <a className="d-block text-light" href="#">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className=" fa-lg instagram rounded-circle p-2 "
                          />
                        </a>
                      </div>
                      <div className="follow-count pl-15">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        {/* <a href="#">
                          <img
                            src={require("../assets/img/news/icon-yo.png")}
                            alt=""
                          />
                        </a> */}
                        <a className="d-block text-light" href="#">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className=" fa-lg youtube rounded-circle p-2 "
                          />
                        </a>
                      </div>
                      <div className="follow-count pl-15">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- New Poster --> */}
                <div className="news-poster d-none d-lg-block">
                  <img
                    src={require("../assets/img/news/news_card.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About US End --> */}
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
