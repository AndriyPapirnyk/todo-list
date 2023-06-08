import React, {useState} from 'react';
import TodoForm from '../TodoForm/TodoForm';
import {v4 as uuidv4} from 'uuid';
uuidv4();

function Main() {
    const [todo, setTodo] = useState([]);

    const addTodo = todoItem => {
        setTodo([...todo, {id: uuidv4(), task: todoItem, completed: false, isEditing: false}])
        console.log(todo)
    }
    
  return (
    <main className='main'>
        <TodoForm addTodo={addTodo}/>
    </main>
  );
}

export default Main;
