import { useState } from "react";

export default function BasicForm(){
    const [name,setName] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("submitted", name)
    }
    return(
    <form onSubmit={handleSubmit}>
        <input type="text"
        onChange={(e)=>{
           setName(e.target.value) 
        }} placeholder="type"/>
        <button type="submit">submit</button>
    </form>
)
}
