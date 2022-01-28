import React from "react";

const AboutMe = () => {
  return (
    <section className="service-one" id="aboutme">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="banner-one__title">
            About Me
          </h2>
        </div>
        <div className="row">
          <p className="col-8 mx-auto">I have always been obsessed with computers and software! I love helping businesses 
          create software that solves problems, are a joy to use and are crucial to their customers.</p>
        </div>
        <div className="row">
          <p className="col-8 mx-auto">Coming from a software background has helped me lead projects and teams and understand 
          the roadblocks we all face. I have always been willing to lend a hand in testing or wherever is needed. I love challenging 
          problems to solve and believe working as a team is a core part of finding those complex solutions.</p>
        </div>
        <div className="row">
          <p className="col-8 mx-auto">I love geeking out on new technologies and apps that come out into the marketplace. I like programming
          in PHP and Javacript and have self taught myself both. I am known to wireframe in Figma with various UI Kits and love getting 
          prototypes into the hands of customers!</p>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
