import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../container/Home";
import About from "../container/about";
import Contact from "../container/contact";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
