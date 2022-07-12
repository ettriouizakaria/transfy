import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";

import {
  faTrain,
  faMoneyCheck,
  faSliders,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Navbar from "./nav-bar/Navbar";
import Reservation from "../pages/reservation";
import SignUp from "../pages/SignUp";
import { createContext } from "react";
import Orders from "./orders/Orders";
import Payment from "../pages/Payment";

export const loggedInUserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  library.add(
    faTrain,
    faSliders,
    faMoneyCheck,
    faFacebook,
    faTwitter,
    faLinkedin,
    faUser,
    faBars,
    faSearch
  );

  return (
    <loggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className='container'>
          <Navbar />
          <ToastContainer />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <SignUp />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/reservation'>
              <Reservation />
            </Route>
            <Route exact path='/orders'>
              <Orders />
            </Route>
            <Route exact path='/payment'>
              <Payment />
            </Route>
          </Switch>
        </div>
      </Router>
    </loggedInUserContext.Provider>
  );
}

export default App;
