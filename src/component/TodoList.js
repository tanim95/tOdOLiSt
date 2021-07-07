import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {props.todo.map((el) => {
          return (
            <Todo
              todo={el}
              stateTodo={props.todo}
              setTodos={props.todoFn}
              text={el.textInput}
              key={el.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
