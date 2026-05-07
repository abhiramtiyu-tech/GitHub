import { useState } from "react"

export default function Form(){
    const [form,setForm] = useState({
        name:"",
        email:"",
        password: ""
    })
    const [errors, setErrors] = useState({});

    const [submittedData,setSubmittedData] = useState([])
    const hangleChange=(e)=>{
        const {name, value} = e.target;
        setForm((prev)=>({
            ...prev,
            [name]: value
        }))
    }
    const validate =()=>{
        const newError = {};
        if(!form.name) newError.name = "name is required";
        if(!form.email.includes('@')) newError.email = "invalida email";
        if(form.password.length < 6) newError.password = "min 6 char";
        return newError;
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const validationError = validate();
        if(Object.keys(validationError).length > 0){
            setErrors(validationError)
        }else{
        setSubmittedData((prev)=>[...prev, form])
        console.log("form data",form)
        }
        
    }
    return(
        <div>
            {
                submittedData.map(formData=><p>{formData.name} - {formData.email} - {formData.password}</p>)
            }
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} onChange={hangleChange}/>
                {errors.name && <p>{errors.name}</p>}
                <input type="email" name="email" value={form.email} onChange={hangleChange}/>
                 {errors.email && <p>{errors.email}</p>}
                <input type="password" name="password" value={form.password} onChange={hangleChange}/>
                 {errors.password && <p>{errors.password}</p>}
                <button type="submit">submit</button>
            </form>
            
        </div>
    )
}