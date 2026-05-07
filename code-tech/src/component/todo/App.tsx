
import { useEffect, useMemo, useState } from 'react'
import BasicForm from './component/13-april/BasicForm';
import FormsHandling from './component/13-april/FormsHandling';
import Todo from './component/todo/Todo';
import Todos from './component/todo/models/todos'
import NewTodo from './component/todo/NewTodo';



function App() {
  const [todo,setTodos] = useState<Todos[]>([])
//   const todos = [
//     new Todos('Learn React'),
//     new Todos('Learn Typescript')
// ]

  const todTodoHandler = (todoText: string)=>{
    const newTodo = new Todos(todoText)
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    })
  }
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <NewTodo onAddTodo={todTodoHandler}/>
        <Todo items ={todo}/>
      </section>
    </>
  )
}

export default App