import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import "../styles/App.css";

import LogIn from "./LogIn";
import SignUp from "./SignUp";

import store from '../redux/store/store'
// const publicPage = () => <div>public</div>;
// const protectedPage = () => <div>protected</div>;

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <p>b l i t z</p> */}
          </header>
          <div>
            <SignUp />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
