import React, { Component } from "react";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import "./Landing.css";
import "./App.css";
import icon from "./images/logo-white.png";
import cristian from "./images/cristian.jpg";
import daniel from "./images/daniel.jpg";
import robert from "./images/robert.jpeg";
import oscar from "./images/oscar.jpeg";
import nestor from "./images/nestor.jpeg";
import jorge from "./images/jorge.jpg";
import phone from "./images/phone.svg";
import case1 from "./images/case1.jpg";
import case2 from "./images/case2.jpg";
import case3 from "./images/case3.jpg";
import proexo from "./images/proexo.png";
import doMarcala from "./images/logo_DOMarcala.jpg";
import nativo from "./images/logo_Nativo.jpg";
import adelante from "./images/logo_Adelante.png";
import galeano from "./images/galeano.jpg";
import bid from "./images/bid.png";
import rainforest from "./images/rainforest.png";
import tripartito from "./images/tripartito.png";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardText,
  CardBody
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faUser,
  faArrowRight,
  faQrcode
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Steps from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";

class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  blogLink() {
    window.open("http://buidlhonduras.com/tag/coffee/", "_blank");
  }
  pressLink() {
    window.open("https://affogato-network.presskite.com/", "_blank");
  }
  render() {
    return (
      <div className="wrapper">
        <section className="asymmetric">
          <header>
            <div className="container-fluid ">
              <div className="row">
                <Nav className="col-sm-8 col-xs-12 offset-md-1 ">
                  <NavItem className="logo-li">
                    <NavLink>
                      <img src={icon} className="mr-2 logo" alt="logo" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link"
                      to="section-2"
                      smooth={true}
                      isDynamic={true}
                      href="section-2"
                    >
                      Use Cases
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link"
                      to="secondary"
                      smooth={true}
                      isDynamic={true}
                      href="secondary"
                    >
                      Team
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link"
                      to="partners-logos"
                      smooth={true}
                      isDynamic={true}
                      href="partners-logos"
                    >
                      Partners
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link"
                      to="press-section"
                      smooth={true}
                      isDynamic={true}
                      href="press-section"
                    >
                      Blog
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link"
                      to="press-section"
                      smooth={true}
                      isDynamic={true}
                      href="press-section"
                    >
                      News
                    </Link>
                  </NavItem>
                </Nav>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-sm-11 offset-md-1 no-gutters">
                  <h1 className="col-lg-12">
                    The Coffee Economy on the Blockchain
                  </h1>
                  <p className="col-lg-10 mt-4 description">
                    Our platform uses Smart Contracts on the Ethereum blockchain
                    to create trust and new business models throughout the
                    coffee value chain.
                  </p>
                  <div className="call-to-action ">
                    <a
                      href="https://www.getdrip.com/forms/729610656/submissions/new"
                      target="_blank"
                      className="col-md-5 col-lg-5 btn btn-primary"
                      rel="noopener noreferrer"
                    >
                      Get our newsletter
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block ">
                  <img
                    src={phone}
                    className="img-fluid landing-phone"
                    alt="iphone preview"
                  />
                </div>
              </div>
            </div>
          </header>
        </section>
        <section id="primary">
          <section id="section-1" className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-sm-11 offset-md-1 no-gutters">
                <h1 className="col-lg-12">How it works?</h1>
                <div className="row">
                  <div className="col-lg-10 mt-4 ">
                    <Steps direction="vertical">
                      <Steps.Step
                        title={
                          <div>
                            <h5 className="">Create an Account.</h5>
                          </div>
                        }
                        icon={
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            aria-hidden="true"
                          />
                        }
                        description={
                          <div>
                            <p className="font-subheader">
                              Producers and different actors of the Coffee value
                              chain creates an account on the Affogato platform.
                            </p>
                          </div>
                        }
                        status="process"
                      />
                      <Steps.Step
                        title={
                          <div>
                            <h5 className="">Add Information.</h5>
                          </div>
                        }
                        icon={
                          <FontAwesomeIcon
                            icon={faQrcode}
                            size="sm"
                            aria-hidden="true"
                          />
                        }
                        description={
                          <div>
                            <p className="font-subheader">
                              Farmer uses the platform to add in the Blockchain
                              information of the farms and their coffee batches.
                              A unique QR code is generated per batch.
                            </p>
                          </div>
                        }
                        status="process"
                      />
                      <Steps.Step
                        title={
                          <div>
                            <h5 className="">Interact with Coffee Bags.</h5>
                          </div>
                        }
                        icon={
                          <FontAwesomeIcon
                            icon={faCoffee}
                            size="sm"
                            aria-hidden="true"
                          />
                        }
                        description={
                          <div>
                            <p className="font-subheader">
                              Different actors can interact with the coffee
                              batches in the Blockchain adding more value.
                            </p>
                          </div>
                        }
                        status="process"
                      />

                      <Steps.Step
                        title={
                          <div>
                            <h5 className="">Connect to Business Models.</h5>
                          </div>
                        }
                        icon={
                          <FontAwesomeIcon
                            icon={faEthereum}
                            size="sm"
                            aria-hidden="true"
                          />
                        }
                        description={
                          <div>
                            <p className="font-subheader">
                              The Blockchain allows the implementation of new
                              Business Models for the actors in the Coffee value
                              chain. Subscriptions, Crowdfunding, and Tipping
                              are now available for farmers.
                            </p>
                          </div>
                        }
                        status="process"
                      />
                    </Steps>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="section-2" className="">
            <div className="col-lg-8 col-sm-11 offset-md-2 justify-content-center">
              <h1 className="col-lg-12 text-center pb-2">
                Use Cases for Affogato
              </h1>
              <div className="row justify-content-center pt-4">
                <div className="col-lg-4">
                  <Card className="text-center">
                    <CardImg top width="100%" src={case1} alt="Use Case 1" />
                    <CardBody>
                      <h4>Proof of Quality</h4>
                      <p>
                        Affogato uses Smart contracts to give transparency and
                        proof of the quality of the coffee beans giving more
                        trust to the different actors in the value chain.
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card className="text-center">
                    <CardImg top width="100%" src={case2} alt="Use Case 2" />
                    <CardBody>
                      <h4>New Business Models</h4>
                      <CardText>
                        Affogato allows the creation of decentralized finances
                        and new business models such as tips, crowdfunding, and
                        pre-sales, helping the producers to earn more money.
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card className="text-center">
                    <CardImg top width="100%" src={case3} alt="Use Case 3" />
                    <CardBody>
                      <h4>Farm to Cup</h4>
                      <CardText>
                        Producers that implements Affogato in their process are
                        able to give traceability to their coffee through all
                        the coffee chain, allowing the consumers to learn where
                        their coffee comes from.
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section id="secondary">
          <div className="text-center">
            <section id="section-3" className="">
              <div id="team" className="col-8 offset-2">
                <div className="row justify-content-center">
                  <h1>Meet the Team</h1>
                  <p className="mt-4">
                    We’ve are working with a number of talented individuals.
                    Many of them have contributed previously to Affogato in a
                    voluntary capacity.
                  </p>
                  <div className="row justify-content-center team-wrapper">
                    <a
                      className="member col-sm-4 col-xs-12"
                      href="https://twitter.com/crisgarner"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src={cristian}
                          alt="Cristian"
                        />
                      </div>
                      <div className="details">
                        <h3>Cristian Espinoza</h3>
                        <p>Team Lead</p>
                        <small>
                          <p>
                            ConsenSys Alumni, #BUIDL Ambassador Blockchain
                            Engineer
                          </p>
                        </small>
                      </div>
                    </a>
                    <a
                      className="member col-sm-4 col-xs-12"
                      href="https://www.linkedin.com/in/rmudgett/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src={robert}
                          alt="Robert"
                        />
                      </div>
                      <div className="details">
                        <h3>Robert Mudgett</h3>
                        <p>Team Lead</p>
                        <small>
                          <p>
                            Economist, Business Development, Blockchain &
                            Cryptocurrencies
                          </p>
                        </small>
                      </div>
                    </a>
                    <a
                      className="member col-sm-4 col-xs-12"
                      href="https://github.com/Struka9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src={oscar}
                          alt="Oscar"
                        />
                      </div>
                      <div className="details">
                        <h3>Oscar Presidente</h3>
                        <p>Mobile Developer</p>
                        <small>
                          <p>Computer Science Engineer, Android Development</p>
                        </small>
                      </div>
                    </a>
                    <a
                      className="member col-sm-4 col-xs-12"
                      href="https://www.linkedin.com/in/jorgedestephen/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src={jorge}
                          alt="Jorge"
                        />
                      </div>
                      <div className="details">
                        <h3>Jorge Destephen</h3>
                        <p>Software Engineer</p>
                        <small>
                          <p>
                            Backend Developer, <br />Computer Science Master’s
                            Degree
                          </p>
                        </small>
                      </div>
                    </a>
                    <a
                      className="member col-sm-4 col-xs-12"
                      href="https://twitter.com/nestor_sct"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src={nestor}
                          alt="Nestor"
                        />
                      </div>
                      <div className="details">
                        <h3>Nestor Escoto</h3>
                        <p>Software Engineer</p>
                        <small>
                          <p>Blockchain & Fullstack Developer</p>
                        </small>
                      </div>
                    </a>
                    <a
                      className="member col-sm-4 col-xs-12"
                      href="https://www.linkedin.com/in/hn-danielpineda"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src={daniel}
                          alt="Daniel"
                        />
                      </div>
                      <div className="details">
                        <h3>Daniel Pineda</h3>
                        <p>Team Advisor</p>
                        <small>
                          <p>
                            Founder of Café Nativo, <br />
                            Coffee Expert
                          </p>
                        </small>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div id="team-divider" />
              <div id="partners-logos" className="col-8 offset-2">
                <div className="row justify-content-center">
                  <h1 className="col-12">Partners</h1>
                  <p className="mt-2 col-12">
                    Affogato Network is working together with these awesome
                    partners.
                  </p>
                  <div className="img-wrapper col-sm-3 col-xs-12">
                    <a
                      href="http://www.docafemarcala.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={doMarcala} alt="DO Marcala" />
                    </a>
                  </div>
                  <div className="img-wrapper col-sm-3 col-xs-12">
                    <a
                      href="https://www.cafenativo.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={nativo} alt="Cafe Nativo" />
                    </a>
                  </div>
                  <div className="img-wrapper col-sm-3 col-xs-12">
                    <a
                      href="http://galeano.coffee/home-page/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={galeano} alt="Galeano" />
                    </a>
                  </div>
                  <div className="img-wrapper col-sm-3 col-xs-12">
                    <a
                      href="https://adelantecoffee.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={adelante} alt="Adelante Coffee" />
                    </a>
                  </div>{" "}
                  <div className="img-wrapper col-sm-3 col-xs-12">
                    <a
                      href="https://www.iadb.org/en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={bid} alt="BID" />
                    </a>
                  </div>
                  <div className="img-wrapper col-sm-3 col-xs-12">
                    <a
                      href="https://www.rainforest-alliance.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={rainforest} alt="Rainforest Alliance" />
                    </a>
                  </div>
                  <div className="img-wrapper col-sm-3 col-xs-12">
                    <a
                      href="http://www.beneficiolasbrisas.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={proexo} alt="Proexo" />
                    </a>
                  </div>
                  <div className="img-wrapper col-sm-3 col-xs-12">
                    <a
                      href="http://tripartito.coffee/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={tripartito} alt="Tripartito" />
                    </a>
                  </div>
                </div>
              </div>

              <div id="press-section" className="col-12">
                <div className="row justify-content-center pb-5">
                  <Card
                    className="col-sm-4 col-xs-12 blog"
                    onClick={this.blogLink}
                  >
                    <CardBody>
                      <h3 className="mt-3 mb-3">
                        Explore the Blog{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="xs"
                          aria-hidden="true"
                        />
                      </h3>
                      <p className="">
                        To read the updates of the project from our team
                      </p>
                    </CardBody>
                  </Card>
                  <Card
                    className="col-sm-4 col-xs-12 press "
                    onClick={this.pressLink}
                  >
                    <CardBody className="">
                      <h3 className="mt-3 mb-3">
                        Press Room{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="xs"
                          aria-hidden="true"
                        />
                      </h3>
                      <p className="">
                        Learn what the news say about Affogato Network
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="text-left col-sm-8 offset-sm-2 col-xs-12">
                  <div className="row justify-content-center">
                    <div className="col-sm-4 col-xs-12">
                      <h3>Want to learn more?</h3>
                      <h4>Get in touch with the team.</h4>
                    </div>
                    <div className="col-sm-4 col-xs-12 bottom-call-to-action">
                      <a
                        href="mailto:info@affogatonetwork.com"
                        target="_blank"
                        className=" col-12 btn btn-primary mt-2"
                        rel="noopener noreferrer"
                      >
                        Contact Us!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
