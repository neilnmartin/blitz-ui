import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";

import App from './App'

import store from '../redux/store/store'

function TestRouteComponent() {
  return (
    <div>
      TEST ROUTE COMPONENT
    </div>
  )
}


function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  );
}

export default Root;
