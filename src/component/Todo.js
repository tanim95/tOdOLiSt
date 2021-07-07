import React from 'react';

const ListItem = (props) => {
  const deleteItem = () => {
    props.setTodos(props.stateTodo.filter((el) => props.todo.id !== el.id));
  };

  const completeItem = () => {
    props.setTodos(
      props.stateTodo.map((el) => {
        if (el.id === props.todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        } else {
          return el;
        }
      })
    );
  };

  return (
    <div className='todo'>
      <li
        className={`todo-item ${
          props.todo.completed === true ? 'completed' : ''
        }`}
        id={props.id}
      >
        {props.text}
      </li>
      <button onClick={completeItem} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteItem} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};
export default ListItem;
