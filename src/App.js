import React, { Component } from "react";
import "./Landing.css";
import "./App.css";
import icon from "./images/logo-white.png";
import phone from "./images/phone.svg";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="asymmetric">
          <header>
            <div className="container-fluid ">
              <div className="row">
                <Nav className="col-8 offset-md-1 ">
                  <NavItem>
                    <NavLink href="#">
                      <img src={icon} className="mr-2 logo" alt="logo" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link</NavLink>
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
                    Body, dark, galão pumpkin spice, in, galão, in a iced java
                    chicory. Ristretto, cortado id brewed wings acerbic java
                    kopi-luwak bar and latte. Coffee caffeine iced aftertaste
                    milk barista frappuccino.
                  </p>
                  <div className="call-to-action ">
                    <a
                      href="https://www.getdrip.com/forms/729610656/submissions/new"
                      target="_blank"
                      className="col-md-5 col-lg-5 btn btn-primary"
                      rel="noopener noreferrer"
                    >
                      Get the latest news
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
                <h1 className="col-lg-12">Early User Research Findings</h1>
                <div className="row">
                  <div className="col-lg-10 mt-4 ">
                    <Steps direction="vertical">
                      <Steps.Step
                        title={
                          <div>
                            <FontAwesomeIcon
                              icon={faEthereum}
                              size="2x"
                              aria-hidden="true"
                            />
                            <h5 className="ml-2">Creates an Account.</h5>
                          </div>
                        }
                        description={
                          <div>
                            <p className="font-subheader">
                              Fund a well specified issue on your Github repo
                              which is a good candidate for external
                              contribution.
                            </p>
                          </div>
                        }
                        status="process"
                      />
                      <Steps.Step
                        title={
                          <div>
                            <FontAwesomeIcon
                              icon={faEthereum}
                              size="2x"
                              aria-hidden="true"
                            />
                            <h5 className="ml-2">Add information.</h5>
                          </div>
                        }
                        description={
                          <div>
                            <p className="font-subheader">
                              Fund a well specified issue on your Github repo
                              which is a good candidate for external
                              contribution.
                            </p>
                          </div>
                        }
                        status="process"
                      />
                      <Steps.Step
                        title={
                          <div>
                            <FontAwesomeIcon
                              icon={faEthereum}
                              size="2x"
                              aria-hidden="true"
                            />
                            <h5 className="ml-2">
                              Adds the unique QR to their coffee bags.
                            </h5>
                          </div>
                        }
                        description={
                          <div>
                            <p className="font-subheader">
                              Fund a well specified issue on your Github repo
                              which is a good candidate for external
                              contribution.
                            </p>
                          </div>
                        }
                        status="process"
                      />

                      <Steps.Step
                        title={
                          <div>
                            <FontAwesomeIcon
                              icon={faEthereum}
                              size="2x"
                              aria-hidden="true"
                            />
                            <h5 className="ml-2">
                              Connects to business models.
                            </h5>
                          </div>
                        }
                        description={
                          <div>
                            <p className="font-subheader">
                              Fund a well specified issue on your Github repo
                              which is a good candidate for external
                              contribution.
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
                <div className="col-lg-3">
                  <Card className="text-center">
                    <CardImg
                      top
                      width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>

                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button className="btn-primary">Button</Button>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="text-center">
                    <CardImg
                      top
                      width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>

                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button className="btn-primary">Button</Button>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="text-center">
                    <CardImg
                      top
                      width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>

                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button className="btn-primary">Button</Button>
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
              <div id="partners-logos" className="col-8 offset-2">
                <div className="row justify-content-center">
                  <h1 className="col-12">Partners</h1>
                  <p className="mt-2">
                    We’ve hired a number of talented individuals. Many of them
                    have contributed previously to ENS in a voluntary capacity.
                  </p>
                  <div className="img-wrapper col-3">
                    <img src="https://via.placeholder.com/180x60" />
                  </div>
                  <div className="img-wrapper col-3">
                    <img src="https://via.placeholder.com/180x60" />
                  </div>
                  <div className="img-wrapper col-3">
                    <img src="https://via.placeholder.com/180x60" />
                  </div>
                  <div className="img-wrapper col-3">
                    <img src="https://via.placeholder.com/180x60" />
                  </div>
                  <div className="img-wrapper col-3">
                    <img src="https://via.placeholder.com/180x60" />
                  </div>
                  <div className="img-wrapper col-3">
                    <img src="https://via.placeholder.com/180x60" />
                  </div>
                </div>
              </div>
              <div id="team-divider" />
              <div id="team" className="col-8 offset-2">
                <div className="row justify-content-center">
                  <h1>Meet the Team</h1>
                  <p className="mt-4">
                    We’ve hired a number of talented individuals. Many of them
                    have contributed previously to ENS in a voluntary capacity.
                  </p>
                  <div className="row justify-content-center team-wrapper">
                    <a className="member col-4 " href="#">
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                        />
                      </div>
                      <div className="details">
                        <h3>Nick Johnson</h3>
                        <p>Lead Developer</p>
                      </div>
                    </a>
                    <a className="member col-4 " href="#">
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                        />
                      </div>
                      <div className="details">
                        <h3>Nick Johnson</h3>
                        <p>Lead Developer</p>
                      </div>
                    </a>
                    <a className="member col-4 " href="#">
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                        />
                      </div>
                      <div className="details">
                        <h3>Nick Johnson</h3>
                        <p>Lead Developer</p>
                      </div>
                    </a>
                    <a className="member col-4" href="#">
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                        />
                      </div>
                      <div className="details">
                        <h3>Nick Johnson</h3>
                        <p>Lead Developer</p>
                      </div>
                    </a>
                    <a className="member col-4" href="#">
                      <div className="img-wrapper">
                        <img
                          className="hover rounded-circle"
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                        />
                      </div>
                      <div className="details">
                        <h3>Nick Johnson</h3>
                        <p>Lead Developer</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div id="press-section" className="col-12">
                <div className="row justify-content-center pb-5">
                  <Card className="col-4 blog">
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
                        Use SQL to explore your business’ payments and revenue
                        data, build and run custom reports, get insights, and
                        more.
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="col-4 press ml-5">
                    <CardBody className="">
                      <h3 className="mt-3 mb-3">
                        What the news say about us{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="xs"
                          aria-hidden="true"
                        />
                      </h3>
                      <p className="">
                        Use SQL to explore your business’ payments and revenue
                        data, build and run custom reports, get insights, and
                        more.
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="text-left col-8 offset-2 mt-5">
                  <div className="row">
                    <div className="col-4">
                      <h3>Ready to get started?</h3>
                      <h4>Get in touch or create an account.</h4>
                    </div>
                    <div className="col-6 bottom-call-to-action">
                      <a
                        href="#"
                        target="_blank"
                        class=" col-6 btn btn-primary mt-2"
                        rel="noopener noreferrer"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <footer className="clearfix pt-1">
          <div id="footer-divider" />
        </footer>
      </div>
    );
  }
}

export default App;
