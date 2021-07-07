import React, { useState } from 'react';

import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
  const [txt, setText] = useState('');
  const [todo, setTodo] = useState([]);

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Todo List</h1>
      <Form todo={todo} todoFn={setTodo} text={txt} newText={setText} />
      <TodoList text={txt} todo={todo} todoFn={setTodo} />
    </div>
  );
}

export default React.memo(App);
