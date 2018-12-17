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
  CardSubtitle,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
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
          <div className="cols container-lg text-center">
            <section id="section-3">
              <h1>Meet the Team</h1>
              <p className="mt-4">
                We’ve hired a number of talented individuals. Many of them have
                contributed previously to ENS in a voluntary capacity.
              </p>
              <div className="row justify-content-center team-wrapper">
                <a class="member col-4 " href="#">
                  <div class="img-wrapper">
                    <img
                      class="hover rounded-circle"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                    />
                  </div>
                  <div class="details">
                    <h3>Nick Johnson</h3>
                    <p>Lead Developer</p>
                  </div>
                </a>
                <a class="member col-4 " href="#">
                  <div class="img-wrapper">
                    <img
                      class="hover rounded-circle"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                    />
                  </div>
                  <div class="details">
                    <h3>Nick Johnson</h3>
                    <p>Lead Developer</p>
                  </div>
                </a>
                <a class="member col-4 " href="#">
                  <div class="img-wrapper">
                    <img
                      class="hover rounded-circle"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                    />
                  </div>
                  <div class="details">
                    <h3>Nick Johnson</h3>
                    <p>Lead Developer</p>
                  </div>
                </a>
                <a class="member col-4" href="#">
                  <div class="img-wrapper">
                    <img
                      class="hover rounded-circle"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                    />
                  </div>
                  <div class="details">
                    <h3>Nick Johnson</h3>
                    <p>Lead Developer</p>
                  </div>
                </a>
                <a class="member col-4" href="#">
                  <div class="img-wrapper">
                    <img
                      class="hover rounded-circle"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=184&h=184"
                    />
                  </div>
                  <div class="details">
                    <h3>Nick Johnson</h3>
                    <p>Lead Developer</p>
                  </div>
                </a>
              </div>

              <div id="press-logos" className="row justify-content-center">
                <h1 className="col-12">As seen in the press</h1>

                <div class="img-wrapper col-3">
                  <img src="https://via.placeholder.com/180x60" />
                </div>
                <div class="img-wrapper col-3">
                  <img src="https://via.placeholder.com/180x60" />
                </div>
                <div class="img-wrapper col-3">
                  <img src="https://via.placeholder.com/180x60" />
                </div>
              </div>
            </section>
          </div>
        </section>
        <footer />
      </div>
    );
  }
}

export default App;
