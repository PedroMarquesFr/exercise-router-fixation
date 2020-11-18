import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Users" component={Users} />
      </Router>
    );
  }
}

export default App;
