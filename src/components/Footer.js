import React, { Component } from "react";
import darkLogo from "../assets/images/resources/logo-dark.png";
export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 70) {
      this.setState({
        scrollBtn: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        scrollBtn: false
      });
    }
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="site-footer__upper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="footer-widget d-flex justify-content-center">
                    <div className="site-footer__social">
                      <a
                        href="https://www.linkedin.com/in/roland-b-76a94a160/"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a
                        href="https://twitter.com/rjburkejr"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        href="https://github.com/rbur0425"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="inner-container text-center">
                <p className="site-footer__copy">
                  &copy; Copyright {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div
          onClick={this.scrollTop}
          onKeyDown={this.scrollTop}
          role="button"
          tabIndex="0"
          className="scroll-to-target scroll-to-top"
          style={{ display: this.state.scrollBtn ? "block" : "none" }}
        >
          <i className="fa fa-angle-up"></i>
        </div>
      </div>
    );
  }
}
