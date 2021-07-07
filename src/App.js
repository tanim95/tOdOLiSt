import React, { useState, useEffect } from 'react';

import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
  const [txt, setText] = useState('');
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState('All');
  const [filterdTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filteringTodos();
  }, [todo, status]);

  const filteringTodos = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todo.filter((el) => el.completed === true));
        break;
      case 'incompleted':
        setFilteredTodos(todo.filter((el) => el.completed === false));
        break;
      default:
        setFilteredTodos(todo);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Todo List</h1>
      <Form
        setFilteredTodos={setFilteredTodos}
        status={status}
        setstatus={setStatus}
        todo={todo}
        todoFn={setTodo}
        text={txt}
        newText={setText}
      />
      <TodoList
        filteringTodos={filterdTodos}
        text={txt}
        todo={todo}
        todoFn={setTodo}
      />
    </div>
  );
}

export default React.memo(App);
