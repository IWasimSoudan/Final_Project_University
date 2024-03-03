import Aggregator from "../../Aggregator/Aggregator";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Social1 from "../../component/Social1/Social1";

export default function SocialMedia() {
  return (
    <>
      <Navbar page={4} />
      <div className="mx-auto">
        <Social1 />
      </div>
      <Footer />
    </>
  );
}
