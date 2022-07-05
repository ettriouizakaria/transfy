import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Signin from "../pages/Signin"
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" >
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
