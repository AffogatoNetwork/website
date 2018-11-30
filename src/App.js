import React, { Component } from "react";
import logo from "./icon.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Coffee Economy on the Ethereum Blockchain</h2>
          <p>
            We are rebuilding our site, you can see the team updates in{" "}
            <a
              className="App-link"
              href="http://buidlhonduras.com/tag/coffee/"
              target="_blank"
            >
              our blog
            </a>
            <br />
            Or contact us at{" "}
            <a className="App-link" href="mailto:info@affogatonetwork.com">
              info@affogatonetwork.com
            </a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
