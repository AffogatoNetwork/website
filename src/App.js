import React, { Component } from "react";
import "./Landing.css";
import "./App.css";
import icon from "./images/logo-white.png";
import phone from "./images/phone.svg";
import { Nav, NavItem, NavLink } from "reactstrap";

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
                <div className="col-lg-6 col-sm-12 offset-md-1 no-gutters">
                  <h1 class="col-lg-12">
                    The coffee economy on the Blockchain
                  </h1>
                  <p class="col-lg-10 mt-4 description">
                    Body, dark, galão pumpkin spice, in, galão, in a iced java
                    chicory. Ristretto, cortado id brewed wings acerbic java
                    kopi-luwak bar and latte. Coffee caffeine iced aftertaste
                    milk barista frappuccino.
                  </p>
                  <div className="call-to-action">
                    <button type="submit" className="col-5 btn btn-primary">
                      Get the latest news
                    </button>
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
          <section id="section-1" className="container-lg">
            <h1>Section Content 1</h1>
          </section>
          <section id="section-2" className="">
            <h1>Section Content 2 </h1>
          </section>
        </section>
        <section id="secondary">
          <div className="cols container-lg">
            <section id="section-3">
              <h1>Section Content 3</h1>
            </section>
          </div>
        </section>
        <footer />
      </div>
    );
  }
}

export default App;
