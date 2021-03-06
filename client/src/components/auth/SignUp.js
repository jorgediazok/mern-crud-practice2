import React from 'react';

import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formStyle: {
    margin: '0px auto',
    padding: '30px',
    borderRadius: '9px',
    boxShadow: '0px 0px 12px -3px #000000',
  },
  spacing: {
    marginTop: '20px',
  },
});

const SignUp = () => {
  const classes = useStyles();

  return (
    <>
      <form noValidate autoComplete="off" className={classes.formStyle}>
        <Typography variant="h6">Sign Up</Typography>
        <TextField
          className={classes.spacing}
          id="enter-name"
          label="Enter Name"
          variant="outlined"
          fullWidth
          autoFocus
        />
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="Enter Email"
          variant="outlined"
          fullWidth
          autoFocus
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          label="Enter Password"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          className={classes.spacing}>
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;
