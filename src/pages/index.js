import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Testimonial from "../components/Testimonial";
import Subscribe from "../components/Subscribe";

const HomePage = () => (
  <Layout pageTitle="Roland Burke - Product Manager | Creator">
    <Nav />
    <Hero />
    <AboutMe />
    <Testimonial />
    <Subscribe />
    <Footer />
  </Layout>
);

export default HomePage;
