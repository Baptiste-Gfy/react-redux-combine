import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TodoList() {
  const todoReducer = useSelector((state) => state.todoReducer);
  const { todos } = todoReducer;
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: todo });
    setTodo('');
  };

  return (
    <div className='TodoList'>
      <label htmlFor='todo'>
        <span>Todo:</span>
        <input
          id='todo'
          type='text'
          placeholder='TODO'
          value={todo}
          onChange={handleChange}
        />
      </label>
      <button type='button' name='todo' onClick={addTodo}>
        SEND
      </button>
      <br />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
