import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "../styles/Home.module.css";


import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Home from "../pages/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route exact path="/signin" >
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
