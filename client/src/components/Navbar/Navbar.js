import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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
      <AppBar position="static" color="secondary">
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
