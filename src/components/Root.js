import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App'

import store from '../redux/store/store'

export default function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  );
}
