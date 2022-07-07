import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrain, faMoneyCheck, faSliders } from "@fortawesome/free-solid-svg-icons";

import Home from "../pages/Home";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import Reservation from "../pages/reservation";
import Signin from "../pages/Signin"

function App() {
  library.add(faTrain, faSliders, faMoneyCheck)
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route exact path="/signin" >
            <Signin />
          </Route>
          <Route exact path="/home" >
            <Home />
          </Route>
          <Route exact path="/reservation" >
            <Reservation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
