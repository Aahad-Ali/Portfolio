import FAQs from "../../components/FAQs";
import Header from "../../components/Header";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";

import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />

    </>
  );
};

export default Home;
