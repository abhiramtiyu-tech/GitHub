import React from 'react';
import Todos from './models/todos';
import TodoList from './TodoList';

const Todo:React.FC<{items: Todos[]}> = (props) => {
  return (
    <ul>
       {
        props.items.map((item=> <TodoList key={item.id} text= {item.text}/>))
       }
    </ul>
  )
}
export default Todo;