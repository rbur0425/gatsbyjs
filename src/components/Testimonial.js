import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import testiImage1 from "../assets/images/resources/testi-1-1.png";

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="testimonials-one">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            What <span>Others</span> Are Saying <br />
          </h2>
        </div>
        <div className="testimonials-one__carousel-outer">
          <div className="testimonials-one__carousel">
            <Swiper getSwiper={setSwiper}>
              <div className="item">
                <div className="testimonials-one__single">
                  <div className="testimonials-one__inner">
                    <p>
                    Roland was a great product guy at FormAssembly, he worked really well with his team, on a daily basis. He has a great technical understanding of software development but doesn't let this get in the way of good product management. He takes things in stride always with a healthy dose of humor, is hard working and a good communicator, with customers and internal employees. I really enjoyed working with Roland, he was a great addition to the team.
                    </p>
                    <h3>Erik Dasque</h3>
                    <span>FormAssembly</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-one__single">
                  <div className="testimonials-one__inner">
                    <p>
                    Roland was a great product owner at FormAssembly. He was great at understanding the technical details and the business value of what we were working on. He consistently advocated for quality and was able to deliver what he worked on. It was a pleasure working with Roland and I would recommend him as a strong technically-minded product leader.
                    </p>
                    <h3>Liz Miner</h3>
                    <span>FormAssembly</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-one__single">
                  <div className="testimonials-one__inner">
                    <p>
                    Roland's a great guy and client of mine! Had a good time working together on a campaign of his, using email to glean results out of the list he had. Would love to work together again anytime!
                    </p>
                    <h3>Evn Teague</h3>
                    <span>Freelance</span>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
          <div className="testimonials-one__carousel__shape-one"></div>
          <div className="testimonials-one__carousel__shape-two"></div>
          <div className="testimonials-one__nav">
            <div
              onClick={goPrev}
              onKeyDown={goPrev}
              role="button"
              tabIndex="-1"
              className="testimonials-one__nav-left"
            >
              <i className="dimon-icon-left-arrow"></i>
            </div>
            <div
              onClick={goNext}
              onKeyDown={goNext}
              role="button"
              tabIndex="-1"
              className="testimonials-one__nav-right"
            >
              <i className="dimon-icon-right-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
