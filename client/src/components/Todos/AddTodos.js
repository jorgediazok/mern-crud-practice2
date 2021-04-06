import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';

const AddTodos = () => {
  return (
    <>
      <form>
        <TextField />
        <Button>
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddTodos;
