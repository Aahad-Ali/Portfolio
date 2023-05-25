import FAQs from "../../components/FAQs";
import Header from "../../components/Header";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
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

    </>
  );
};

export default Home;
