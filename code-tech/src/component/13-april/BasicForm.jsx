import React, { useState } from 'react'

const BasicForm = () => {
    const [firstName, setFirstName] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(firstName)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' 
        name='name'
        value={firstName} onChange={(e)=>setFirstName(e.target.value)}
        />
        <button type='submit'>Submit</button>
    </form>
  )
}
 export default BasicForm;