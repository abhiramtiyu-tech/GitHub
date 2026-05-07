export default function DataList({tableData,loading}){
   if(loading) return <p>loading...</p>
    return <ul>
        {
            tableData?.map((user)=>{
                return <li key={user.id}>{user.name}</li>
            })
        }
    </ul>
}