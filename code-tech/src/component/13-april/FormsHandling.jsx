import React, { useState } from 'react'

const FormsHandling = () => {
    const {formsData, setFormsData} = useState({
        name:"",
        email:"",
        password: ""
    })
    const handleChange=(e)=>{
        const {name, value}  = e.target;
        setFormsData((prev)=>{
            return({...prev,[name]: value})
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formsData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formsData.name} onChange={handleChange}/>
            <input type="email" name="email" value={formsData.email} onChange={handleChange}/>
            <input type="password" name="password" value={formsData.password} onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
export default FormsHandling;