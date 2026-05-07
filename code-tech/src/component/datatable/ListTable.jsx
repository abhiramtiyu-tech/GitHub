import React from 'react'

export const ListTable = ({data,loading}) => {
    if(loading) return <p>Loading...</p>
  return (
    <div>
        <ul>
            {data?.map(user=>{
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    </div>
  )
}
