import React, { Component } from "react";
import { Link } from "gatsby";
import logoDark from "../assets/images/resources/logo-dark.png";
export default class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };

  render() {
    return (
      <header className="site-header site-header__header-one">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
              </a>
              <button className="menu-toggler">
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" one-page-scroll-menu navigation-box">
                <li className="current scrollToLink">
                  <a href="/">Home</a>
                </li>
                <li className="scrollToLink">
                  <a href="#aboutme">About Me</a>
                </li>
                <li className="scrollToLink">
                  <a href="#projects">Projects</a>
                </li>
                <li className="scrollToLink">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
