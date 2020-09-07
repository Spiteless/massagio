import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from './components/Auth/Auth/Auth.js'
import Event from './components/Event/Event/Event.js'
import Profile from './components/Profile/Profile/Profile.js'
import Cart from './components/Cart/Cart/Cart.js'
import Dashboard from './components/Dashboard/Dashboard/Dashboard.js'

export default (
    <Switch>
      <Route component={Auth} exact path="/" />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={Event} path="/event/:eventid" />
      <Route component={Profile} path="/profile" />
      <Route component={Cart} path="/cart" />
    </Switch>
  );