import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "../styles/App.css";

import Auth from './Authentication/Auth'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>b l i t z</p> */}
        <span><img src="/favicon.ico"/>LITZ</span>
      </header>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </div>
  );
}

export default App;