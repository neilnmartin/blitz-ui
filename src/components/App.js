import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";

import "../styles/App.css";

import PrivateRoute from './Authentication/PrivateRoute'
import Auth from './Authentication/Auth'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>b l i t z</p> */}
        <span><img src="/favicon.ico" alt="blitz-logo"/>LITZ</span>
      </header>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute path="/">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;