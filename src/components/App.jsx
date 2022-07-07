import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrain,
  faMoneyCheck,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Home from "../pages/Home";
import Navbar from "./Navbar";
import Reservation from "../pages/reservation";
import Login from "../pages/Login";

function App() {
  library.add(
    faTrain,
    faSliders,
    faMoneyCheck,
    faFacebook,
    faTwitter,
    faLinkedin
  );

  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/reservation'>
            <Reservation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
