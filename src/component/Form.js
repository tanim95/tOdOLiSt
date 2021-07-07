import React from 'react';

const Form = (props) => {
  const inputTextHandler = (e) => {
    props.newText(e.target.value);
  };
  const inputTodoHandler = (e) => {
    e.preventDefault();
    props.todoFn([
      ...props.todo,
      {
        completed: false,
        textInput: props.text,
        id: Math.floor(Math.random() * 100),
      },
    ]);
    props.newText('');
  };

  const statusHandler = (e) => {
    props.setstatus(e.target.value);
  };

  return (
    <form>
      <input
        value={props.text}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button
        disabled={props.text === '' ? true : false}
        onClick={inputTodoHandler}
        className='todo-button'
        type='submit'
      >
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='incompleted'>Incompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
