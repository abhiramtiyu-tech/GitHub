import React, { useRef } from 'react'

const NewTodo:React.FC<{onAddTodo: (text:string)=>void}> = (props) => {
    
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const submitHandler=(event: React.FormEvent)=>{
        event.preventDefault()
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0) return;
        props.onAddTodo(enteredText)
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="todo"> todo text</label>
        <input type='text' id='text' ref={todoTextInputRef}/>
        <button>add button</button>
    </form>
  )
}
export  default NewTodo;