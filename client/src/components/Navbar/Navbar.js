import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  navbar: {
    marginTop: '10px',
    backgroundColor: '#191919',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#fff',
  },
  authButton: {},
});

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSignOut = () => {
    history.push('/signin');
  };

  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link to="/" className={classes.linkStyle}>
              todoApp
            </Link>
          </Typography>
          <Typography variant="subtitle2" className={classes.root}>
            Logged In as JorgeDV
          </Typography>
          <Button
            onClick={() => handleSignOut()}
            className={classes.authButton}
            color="inherit">
            Sign Out
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/signin">
              Sign In
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/signup">
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
