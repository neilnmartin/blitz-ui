import React from 'react'
import Login from './LogIn'
import SignUp from './SignUp'
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/neilnmartin">
        Neil Martin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Auth() {
  let { path } = useRouteMatch();
  return (
    <div>
      {/* <Card> */}
        <Switch>
          <Route exact path={`${path}/login`}>
            {({ history }) => {
              return <Login loginHistory={history}/> // render props pattern for custom prop names
            }}
          </Route>
          <Route exact path={`${path}/signup`} component={SignUp} />
        </Switch>
      {/* </Card> */}
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  )
}
