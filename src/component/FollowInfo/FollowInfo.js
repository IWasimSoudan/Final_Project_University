import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function FollowInfo() {
  return (
    <>
      <div className="col-lg-4">
        <div className="section-tittle mb-40">
          <h3>Follow Us</h3>
        </div>

        <div className="single-follow mb-45">
          <div className="single-box">
            <div className="follow-us d-flex align-items-center">
              <div className="follow-social">
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

        <div className="news-poster d-none d-lg-block">
          <img src={require("../../assets/img/news/news_card.jpg")} alt="" />
        </div>
      </div>
    </>
  );
}
