import React from 'react';
import Login from '../Login/Login';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const Container = () => {
  return (
    <div>
       <div className="forms">
        <TodoForm />
        <Login />
      </div>
      <TodoList/>
    </div>
  );
}

export default Container;
