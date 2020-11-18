import React, { Component } from "react";

import Home from "./Home";
import About from "./About";
import Users from "./Users";
import StrictAccess from "./StrictAccess";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    const user = {
      userName: "joao",
      password: "1234",
    };
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route
            path="/Users/:id"
            render={(props) => (
              <Users {...props} greetingMessage="Good Morning" />
            )}
          />
          <Route
            path="/strict-access"
            render={() =>
              user.userName === "joao" && user.password === "1234" ? (
                <StrictAccess user={user} />
              ) : (
                (alert("Access denied"), (<Redirect to="/" />))
              )
            }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
