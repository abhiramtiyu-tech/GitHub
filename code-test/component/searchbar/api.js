export const fetchUser = async(keyword)=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data.filter((user)=>
       user.name.toLowerCase().includes(keyword.toLowerCase())
    )
}
