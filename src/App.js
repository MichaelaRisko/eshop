import React, { Component } from "react";
import Router from "./Router";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";
import LandingPage from "./LandingPage.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
        <Footer className="page-container" />
      </div>
    );
  }
}

export default App;
