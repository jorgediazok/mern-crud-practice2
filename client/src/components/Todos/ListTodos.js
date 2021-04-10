import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Todo from './Todo';
import { getTodos } from '../../store/actions/todoActions';

const useStyles = makeStyles({
  todosStyle: {
    margin: '20px auto',
    padding: '20px',
    borderRadius: '9px',
    boxShadow: '0px 0px 12px -3px #000000',
  },
});

const ListTodos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className={classes.todosStyle}>
      <Typography variant="h5">theTodos</Typography>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default ListTodos;
