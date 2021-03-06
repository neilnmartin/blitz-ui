import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../redux/actions/actionCreators";

import Copyright from './CopyRight'

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.green
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  signout: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Dashboard = ({ currentUser, dispatch }) => {
  const classes = useStyles();
  const history = useHistory()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Welcome {currentUser.firstName}!
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.signout}
          onClick={() => {
            dispatch(logOut)
            history.replace("/auth/login");
          }}
        >
          Log Out
        </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapStateToProps = (store, ownProps) => {
  const { currentUser } = store.authReducer;
  const { history } = ownProps;
  return { currentUser, history };
};

export default connect(
  mapStateToProps,
  (dispatch) => ({ dispatch })
)(Dashboard);
