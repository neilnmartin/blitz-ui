import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom";

export default function PrivateRoute({ children, ...rest}) {
  console.log('access token: ', localStorage.getItem('access_token'))
  return (
    <Route
      {...rest}
      render={({ location }) => (
        localStorage.getItem('access_token')
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
