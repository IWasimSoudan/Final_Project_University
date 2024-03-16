import Aggregator from "../../Aggregator/Aggregator";
import Navbar from "../../component/Navbar/Navbar";

import Footer from "../../component/Footer/Footer";
import SingleBlog from "../../component/SingleBlog/singleBlog";
const MainPage = () => {
  return (
    <>
      <Navbar page={1} />
      <Aggregator />
      <Footer />
    </>
  );
};

export default MainPage;
