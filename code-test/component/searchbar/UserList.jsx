const UserList=({data,loading,keyword})=>{
   if(loading) return <p>loading....</p> 
   if(!keyword) return <p>please type to search</p>
   return <>
    {data.length > 0  ? <ul>{
        data.map((user)=><li key={user.id}>{user.name} - {user.email}</li>)
        }</ul> : <p>no user found</p>}
   </>
}
export default UserList