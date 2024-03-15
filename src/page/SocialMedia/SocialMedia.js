import FollowInfo from "../../component/FollowInfo/FollowInfo";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Social1 from "../../component/Social1/Social1";

export default function SocialMedia() {
  return (
    <>
      <Navbar page={4} />
      <div className="about-area mt-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Social1 />
            </div>
            <FollowInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
