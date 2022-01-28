import React from "react";
import HeroImage from "../assets/images/hero-image.jpeg";
const Hero = () => {
  return (
    <section className="banner-one" id="banner">
      <span className="banner-one__shape-1"></span>
      <span className="banner-one__shape-2"></span>
      <span className="banner-one__shape-3"></span>
      <span className="banner-one__shape-4"></span>
      <div className="container">
        <div className="banner-one__moc">
          <img src={HeroImage} alt="Roland" />
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="banner-one__content">
              <h3 className="banner-one__title">
              👋 Hi! I'm a <br />
                Product Leader
              </h3>
              <p className="banner-one__text">
                Mix of a developer, customer advocate
                and entreprenuer all mixed into one. I help bring
                products from idea to launch.
              </p>
              <a href="#aboutme" className="banner-one__btn thm-btn ">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
