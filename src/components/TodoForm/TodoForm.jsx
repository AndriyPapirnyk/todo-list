import React, {useState} from 'react';
import './TodoForm.css';


function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    function handleChange(e) {
        setValue(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        addTodo(value)
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input className='form__input' type="text" placeholder='task' onChange={handleChange}/>
        <button className='form__btn' type='submit'>Btn</button>
    </form>
  );
}

export default TodoForm;
