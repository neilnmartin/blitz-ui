import React from 'react';
import logo from '../logo.svg';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect
} from 'react-router-dom'


import '../App.css';


import SignIn from './SignIn'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
}

const publicPage = () => <div>public</div>
const protectedPage = () => <div>protected</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          b l i t z
        </p>
      </header>
      <div>
        <SignIn />
      </div>
    </div>
  );
}

export default App;
