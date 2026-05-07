import React, { use, useState } from 'react';
// ...existing code...

const accordionItems = [
    {   id: 1,
        title: 'What is React?',
        content: 'React is a JavaScript library for building user interfaces with reusable components and efficient rendering.'
    },
    {   id: 2,
        title: 'How do hooks work?',
        content: 'Hooks are functions that let you use state and other React features in functional components without writing class components.'
    },
    {   id: 3,
        title: 'What is JSX?',
        content: 'JSX is a syntax extension that allows you to write HTML-like code in JavaScript, making React components more readable.'
    },
    {   id: 4,
        title: 'What is state management?',
        content: 'State management involves managing the data that changes over time in your application, affecting how components render and behave.'
    }
];
const Accordion=(({items = accordionItems})=>{
    const [activeItem, setActiveItem] =useState([])
    const accordionToggle =(id) =>{
        if(activeItem.includes(id)){
            setActiveItem(activeItem.filter(i=>i !== id))
        }else{setActiveItem([...activeItem,id])}
    }
    return <>
        {items?.map((item)=>(
            <div key={item.id} className={`accordion-${item.id}`}>
                <div className='accordion-heading'>
                    <button onClick={()=>accordionToggle(item.id)}>{item.title}</button>
                </div>
                {activeItem.includes(item.id) && <p>{item.content}</p>}
            </div>
        ))}
    </>
})
export default Accordion;
