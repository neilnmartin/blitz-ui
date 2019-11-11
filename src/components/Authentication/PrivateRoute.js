import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function PrivateRoute({ children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({ location }) => (
        localStorage.getItem('access_token') === true
          ? (children)
          : (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: location }
              }}
            />
          )
      )}
    />
  )
}
