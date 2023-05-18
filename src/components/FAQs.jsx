import SectionHead from "./SectionHead";
import { FaQuestions } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_containers">
        <SectionHead icon={FaQuestions} title="FAQs">
          <div className="faqs_wrapper">vcvgbcfg</div>
        </SectionHead>
      </div>
    </section>
  );
};

export default FAQs;
