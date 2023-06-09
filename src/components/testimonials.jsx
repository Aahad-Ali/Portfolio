import { useState } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";

const Testimonials = () => {
  const [index, SetIndex] = useState(1);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialsHandler = () => {
    SetIndex((prev) => prev - 1);
    
    if (index <= 0) {
      SetIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialsHandler = () => {
    SetIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      SetIndex(0);
    }
  };

  return (
    <div>
      <section className="testimonials">
        <div className="container testimonials_container">
          <SectionHead
            icon={<ImQuotesLeft />}
            title="Testimonials"
            className="testimonials_head"
          />
          <Card className="testimonial">
            <div className="testimonial_avatar">
              <img src={avatar} alt={name} />
            </div>
            <p className="testimonial_quote">{`'${quote}'`}</p>
            <h5>{name}</h5>
            <small className="testimonial_title">{job}</small>
          </Card>
          <div className="testimonials_btn-container">
            <button
              className="testimonials_btn"
              onClick={prevTestimonialsHandler}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              className="testimonials_btn"
              onClick={nextTestimonialsHandler}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
