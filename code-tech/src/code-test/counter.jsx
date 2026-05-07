import { useState } from "react"

const Counter =()=>{
    const [counter,setCounter] = useState(0)
    const increaseCounter =()=>{
        setCounter(counter+1)
    }
    const decreaseCounter =()=>{
        if(counter != 0)  setCounter(counter-1)
    }
    return <>
        <h1>Counter {counter}</h1>
        <button onClick={increaseCounter}>Increase counter</button>
        <button onClick={decreaseCounter}>Decrease counter</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
    </>
}

export default Counter;