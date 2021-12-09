import React from "react";
import BannerMoc from "../assets/images/mocs/banner-moc-1-1.png";
const Banner = () => {
  return (
    <section className="banner-one" id="banner">
      <span className="banner-one__shape-1"></span>
      <span className="banner-one__shape-2"></span>
      <span className="banner-one__shape-3"></span>
      <span className="banner-one__shape-4"></span>
      <div className="container">
        <div className="banner-one__moc">
          <img src={BannerMoc} alt="alter text" />
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="banner-one__content">
              <h3 className="banner-one__title">
                Hello! I am the<br />
                <span>Product</span> Leader <br /> You Need.
              </h3>
              <p className="banner-one__text">
                I am a developer that moved into the product space.<br />{" "}
                I am passionate about exceptional user experience and <br /> bringing
                products from idea to launch.
              </p>
              <a href="#features" className="banner-one__btn thm-btn ">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
