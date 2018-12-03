import React, { Component } from "react";
import "./Landing.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="asymmetric">
          <header>
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet, magna tellus, ultricies etphasellus
              tincidunt elit nec. Ornare sollicitudin sapien non, dignissim
              metus wisi pharetra sollicitudin, sem integer. Nibh sem et amet,
              ultrices ac interdum, nec enim lorem elit commodo dolor, aliquam
              ipsum eget ornare nullam, iaculis porttitor. Quisque sint,
              lobortis rutrum est nonummy, potenti quam quam molestie pede
              porta. Sem ante dis dui wisi suscipit, eu vitae odio integer,
              congue velit lectus aliquet luctus bibendum, et facilisis, laoreet
              ad
            </p>
          </header>
        </section>
        <section id="primary">
          <div className />
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
