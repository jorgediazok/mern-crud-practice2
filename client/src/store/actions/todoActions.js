import axios from 'axios';
import { url } from '../../api/index';

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${url}`)
      .then((todos) => {
        dispatch({
          type: 'GET_TODOS',
          todos,
        });
      })
      .catch((error) => console.log(error.response));
  };
};

export const addTodo = (todo) => {
  return (dispatch) => {
    axios
      .post(`${url}`, todo)
      .then((todo) => {
        dispatch({
          type: 'ADD_TODO',
          todo,
        });
      })
      .catch((error) => console.log(error.response));
  };
};
