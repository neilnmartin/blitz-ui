import React from 'react'
import Login from './LogIn'
import SignUp from './SignUp'
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function Auth() {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/login`}>
          <Login />
        </Route>
        <Route exact path={`${path}/signup`}>
          <SignUp />
        </Route>
      </Switch>
    </div>
  )
}
